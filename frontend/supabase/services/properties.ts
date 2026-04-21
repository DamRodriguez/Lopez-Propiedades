import { PropertyData } from '@/types/property';
import { supabase } from '@/supabase/config';
import { propertyMapper } from '../mappers/propertyMapper';

export const propertiesService = {
  // 1. Obtener todas
  async getAll(): Promise<PropertyData[]> {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return (data || []).map(propertyMapper.toFront);
  },

  // 2. Obtener por ID
  async getById(id: string | number): Promise<PropertyData> {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return propertyMapper.toFront(data);
  },

  // 3. Crear (Con lógica de Destacados)
  async create(property: Omit<PropertyData, 'id' | 'createdAt'>) {
    // REGLA A: Si la nueva es MAIN, todas las demás dejan de serlo
    if (property.isHomeFeatured?.main) {
      await supabase
        .from('properties')
        .update({
          'is_home_featured': { main: false, side: false } // Reset general o según tu estructura JSONB
        })
        .eq('is_home_featured->>main', 'true');
    }

    // REGLA B: Si es SIDE, validar que no haya ya 4
    if (property.isHomeFeatured?.side) {
      const { count, error: countError } = await supabase
        .from('properties')
        .select('*', { count: 'exact', head: true })
        .eq('is_home_featured->>side', 'true');

      if (countError) throw countError;
      if (count && count >= 4) {
        throw new Error("Ya existen 4 propiedades laterales destacadas. Desactiva una antes de continuar.");
      }
    }

    const dbPayload = propertyMapper.toDB(property);

    const { data, error } = await supabase
      .from('properties')
      .insert([dbPayload])
      .select()
      .single();

    if (error) throw error;
    return propertyMapper.toFront(data);
  },

  // 4. Actualizar
  async update(id: number, updates: Partial<PropertyData>) {
    // Si el update incluye cambios en destacados, repetimos la lógica de integridad
    if (updates.isHomeFeatured?.main) {
      await supabase
        .from('properties')
        .update({ 'is_home_featured->main': false })
        .eq('is_home_featured->>main', 'true')
        .neq('id', id); // No nos desactivamos a nosotros mismos si ya éramos main
    }

    // Mapeamos los updates. Si es un Partial, el Mapper debe manejarlo o hacemos merge manual
    const dbUpdates = propertyMapper.toDB(updates as PropertyData);

    const { data, error } = await supabase
      .from('properties')
      .update(dbUpdates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return propertyMapper.toFront(data);
  },

  // 5. Eliminar
  async delete(id: number) {
    const { error } = await supabase
      .from('properties')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};