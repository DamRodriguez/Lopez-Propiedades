'use client';
import { useState } from 'react';
import { propertiesService } from '@/supabase/services/properties';
import { storageService } from '@/supabase/storage';

export default function CreatePropertyForm() {
  const [loading, setLoading] = useState(false);
  // Estado para manejar el toggle: 'main' | 'side' | 'none'
  const [featuredType, setFeaturedType] = useState<'main' | 'side' | 'none'>('none');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget;

    try {
      const mainFile = formData.get('mainImage') as File;

      const imagesInput = form.querySelector('input[name="images"]') as HTMLInputElement;
      const secondaryFiles = imagesInput.files ? Array.from(imagesInput.files) : [];

      const { mainImageUrl, secondaryImageUrls } = await storageService.uploadPropertyImages(
        mainFile,
        secondaryFiles
      );

      console.log("URLs secundarias a guardar:", secondaryImageUrls);

      const newProperty = {
        name: formData.get('name') as string,
        type: formData.get('type') as "ventas" | "alquileres",
        category: formData.get('category') as any,
        price: Number(formData.get('price')),
        description: formData.get('description') as string,
        fullLocation: formData.get('fullLocation') as string,
        mainImage: mainImageUrl,
        location: {
          neighborhood: formData.get('neighborhood') as string,
          city: formData.get('city') as string
        },
        characteristics: {
          bedrooms: Number(formData.get('bedrooms')),
          bathrooms: Number(formData.get('bathrooms')),
          squareMeters: Number(formData.get('squareMeters')),
          garage: formData.get('garage') === 'on'
        },
        images: secondaryImageUrls,
        // Usamos el estado local para definir los destacados
        isHomeFeatured: {
          main: featuredType === 'main',
          side: featuredType === 'side'
        }
      };

      await propertiesService.create(newProperty);
      alert("¡Propiedad publicada correctamente!");
      setFeaturedType('none'); // Reset del toggle
      (e.target as HTMLFormElement).reset();

    } catch (error: any) {
      console.error("Error:", error);
      // Aquí capturamos el error de "Máximo 4" si lo configuraste en el servicio
      alert(error.message || "Hubo un error al subir la propiedad");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl space-y-8 text-gray-800">
      <h2 className="text-2xl font-bold border-b pb-4 text-black">Publicar Nueva Propiedad</h2>

      {/* SECCIÓN 1 Y 2 SE MANTIENEN IGUAL... */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Nombre del Proyecto / Título</label>
          <input name="name" type="text" placeholder="Ej: Moderno Departamento en Palermo" className="border p-2 rounded" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Precio (USD)</label>
          <input name="price" type="number" placeholder="Ej: 150000" className="border p-2 rounded" required />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Tipo</label>
          <select name="type" className="border p-2 rounded">
            <option value="ventas">Venta</option>
            <option value="alquileres">Alquiler</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Categoría</label>
          <select name="category" className="border p-2 rounded">
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="ph">PH</option>
            <option value="lote">Lote</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg underline">Ubicación</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="neighborhood" type="text" placeholder="Barrio" className="border p-2 rounded" required />
          <input name="city" type="text" placeholder="Ciudad" className="border p-2 rounded" required />
          <input name="fullLocation" type="text" placeholder="Dirección Completa" className="border p-2 rounded" required />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg underline">Características</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <input name="bedrooms" type="number" placeholder="Habitaciones" className="border p-2 rounded" />
          <input name="bathrooms" type="number" placeholder="Baños" className="border p-2 rounded" />
          <input name="squareMeters" type="number" placeholder="m² Totales" className="border p-2 rounded" />
          <label className="flex items-center gap-2 cursor-pointer">
            <input name="garage" type="checkbox" className="w-5 h-5" /> ¿Tiene Garage?
          </label>
        </div>
      </div>

      <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-bold text-lg">Multimedia</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Imagen Principal (Portada)</label>
            <input type="file" name="mainImage" accept="image/*" className="text-sm" required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Galería de Imágenes</label>
            <input type="file" name="images" accept="image/*" multiple className="text-sm" />
          </div>
        </div>
      </div>

      {/* Sección 5: Destacados con Lógica de Toggle */}
      <div className="space-y-4">
        <textarea name="description" placeholder="Descripción de la propiedad..." className="w-full border p-2 rounded h-32" required />

        <div className="flex gap-8 p-4 bg-blue-50 rounded">
          <label className="flex items-center gap-2 font-medium cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={featuredType === 'main'}
              onChange={() => setFeaturedType(featuredType === 'main' ? 'none' : 'main')}
            />
            Destacar Principal (Reemplaza al anterior de haber)
          </label>
          <label className="flex items-center gap-2 font-medium cursor-pointer">
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={featuredType === 'side'}
              onChange={() => setFeaturedType(featuredType === 'side' ? 'none' : 'side')}
            />
            Destacar Lateral (Máx 4)
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full cursor-pointer py-4 rounded-lg font-bold text-white transition-all ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-zinc-800'}`}
      >
        {loading ? 'Subiendo Propiedad...' : 'Publicar Ahora'}
      </button>
    </form>
  );
}