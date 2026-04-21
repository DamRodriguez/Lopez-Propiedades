import { supabase } from '@/supabase/config';

export const storageService = {
  async uploadPropertyImages(mainFile: File, secondaryFiles: FileList | File[]) {
    // 1. Subir imagen principal
    const mainImageUrl = await this.uploadSingleImage(mainFile);

    // 2. Filtrar y subir imágenes secundarias (evitamos subir archivos vacíos o corruptos)
    const secondaryFilesArray = Array.from(secondaryFiles).filter(file => file.size > 0);

    const secondaryImageUrls = await Promise.all(
      secondaryFilesArray.map(file => this.uploadSingleImage(file))
    );

    return { mainImageUrl, secondaryImageUrls };
  },

  async uploadSingleImage(file: File) {
    const fileExt = file.name.split('.').pop();
    const cleanName = file.name.split('.')[0].replace(/[^a-zA-Z0-9]/g, '');
    const fileName = `${Date.now()}-${cleanName}.${fileExt}`;

    const { error } = await supabase.storage
      .from('properties-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
        contentType: file.type
      });

    if (error) {
      console.error("Error al subir a Supabase Storage:", error.message);
      throw error;
    }

    const { data } = supabase.storage
      .from('properties-images')
      .getPublicUrl(fileName);

    return data.publicUrl;
  }
};