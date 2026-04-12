import Hero from "@/components/pages/home/Hero";
import Image from "next/image"

const HomePage = () => {
  return (
    <div>
      <Hero />
      {/* <!-- Featured Properties - Bento Grid> */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold font-headline text-primary mb-2">Propiedades Destacadas</h2>
            <div className="h-1.5 w-24 bg-secondary-fixed-dim rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* <!-- Large Featured Card --> */}
          <div className="md:col-span-7 group cursor-pointer">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container mb-4">
              <Image
                fill
                src="https://picsum.photos/200"
                alt="Contemporary mansion"
                data-alt="ultra-modern minimalist white mansion with cantilevered roof levels and a massive swimming pool under a bright blue sky"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-primary text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm uppercase"
                >Venta</span>
                <span
                  className="bg-secondary-fixed-dim text-on-secondary-fixed text-[10px] font-bold tracking-widest px-3 py-1 rounded-sm uppercase"
                >Premium</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1">Mansión Contemporánea Nordelta</h3>
              <p className="text-on-surface-variant flex items-center gap-1 mb-3">
                <span className="material-symbols-outlined text-sm">location_on</span> Nordelta, Buenos Aires
              </p>
              <div className="flex items-center gap-6 text-sm text-on-surface-variant font-medium">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg"
                >straighten</span> 850 m²</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg"
                >bed</span> 5 Dorm.</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg"
                >bathtub</span> 6 Baños</span>
                <span className="ml-auto text-2xl font-extrabold text-primary">USD 2.450.000</span>
              </div>
            </div>
          </div>
          {/* <!-- Side List Items --> */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {/* <!-- Small Card 1 --> */}
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-1/3 aspect-square rounded-lg overflow-hidden bg-surface-container">
                <Image
                  width={200}
                  height={200}
                  src="https://picsum.photos/200"
                  alt="Luxury apartment"
                  data-alt="elegant high-rise luxury apartment interior with floor-to-ceiling windows and designer furniture overlooking a city skyline at sunset"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="w-2/3 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-secondary uppercase mb-1">Alquiler</span>
                <h4 className="font-bold text-primary leading-tight mb-1">Penthouse Vista al Río</h4>
                <p className="text-xs text-on-surface-variant mb-2">Puerto Madero, CABA</p>
                <p className="text-lg font-extrabold text-primary">USD 4.500 <span
                  className="text-xs font-normal text-on-surface-variant">/ mes</span></p>
              </div>
            </div>
            {/* <!-- Small Card 2 --> */}
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-1/3 aspect-square rounded-lg overflow-hidden bg-surface-container">
                <Image
                  width={200}
                  height={200}
                  src="https://picsum.photos/200"
                  alt="Modern office space"
                  data-alt="spacious professional modern office space with wooden accents and glass partitions in a downtown commercial district"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="w-2/3 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-secondary uppercase mb-1">Venta</span>
                <h4 className="font-bold text-primary leading-tight mb-1">Oficinas Corporativas Sky</h4>
                <p className="text-xs text-on-surface-variant mb-2">Retiro, Buenos Aires</p>
                <p className="text-lg font-extrabold text-primary">USD 890.000</p>
              </div>
            </div>
            {/* <!-- Small Card 3 --> */}
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-1/3 aspect-square rounded-lg overflow-hidden bg-surface-container">
                <Image
                  width={200}
                  height={200}
                  src="https://picsum.photos/200"
                  alt="Family house"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="charming brick family home with a well-manicured lawn and blooming garden under soft morning sunlight"
                />
              </div>
              <div className="w-2/3 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-secondary uppercase mb-1">Alquiler Temporario</span>
                <h4 className="font-bold text-primary leading-tight mb-1">Residencia Los Olmos</h4>
                <p className="text-xs text-on-surface-variant mb-2">San Isidro, GBA Norte</p>
                <p className="text-lg font-extrabold text-primary">USD 2.200 <span
                  className="text-xs font-normal text-on-surface-variant">/ mes</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Info Section: Por qué elegirnos --> */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-extrabold font-headline text-primary mb-16">Por qué elegirnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* <!-- Reason 1 --> */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Confianza</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Más de 20 años construyendo relaciones
                basadas en la honestidad y la transparencia total.</p>
            </div>
            {/* <!-- Reason 2 --> */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">workspace_premium</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Experiencia</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Expertos en el mercado inmobiliario de
                alta gama con un historial comprobado de éxito.</p>
            </div>
            {/* <!-- Reason 3 --> */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">person_pin_circle</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Atención Personal</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Cada cliente es único. Diseñamos
                estrategias a medida para cumplir tus objetivos específicos.</p>
            </div>
            {/* <!-- Reason 4 --> */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">ads_click</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Marketing Digital</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Exposición máxima con fotografía
                profesional y posicionamiento en los principales portales.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Call to Action --> */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div
            className="bg-primary-container rounded-2xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="relative z-10 text-white max-w-xl">
              <h2 className="text-3xl font-bold font-headline mb-4">¿Quieres tasar tu propiedad?</h2>
              <p className="text-on-primary-container leading-relaxed">Realizamos tasaciones profesionales en el día
                para que conozcas el valor real de tu inversión en el mercado actual.</p>
            </div>
            <div className="relative z-10">
              <button
                className="bg-secondary-fixed-dim text-on-secondary-fixed px-10 py-4 rounded-lg font-extrabold hover:scale-105 transition-transform"
              >SOLICITAR TASACIÓN</button>
            </div>
            {/* <!-- Abstract decorative element --> */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary opacity-50 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
      {/* <!-- Footer --> */}
      <footer className="bg-slate-50 dark:bg-slate-950 w-full mt-auto border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6 md:px-12 w-full max-w-7xl mx-auto">
          {/* <!-- Brand & Info --> */}
          <div className="flex flex-col gap-4">
            <div className="text-lg font-semibold text-blue-800 dark:text-blue-300 font-headline">Lopez Propiedades
            </div>
            <p className="text-sm font-normal text-slate-600 dark:text-slate-400 max-w-xs leading-relaxed">
              Somos líderes en el mercado inmobiliario premium, brindando soluciones integrales para la compra, venta y
              alquiler de propiedades.
            </p>
            <div className="flex gap-4 mt-2">
              <a className="text-slate-500 hover:text-blue-700 transition-all scale-105" href="#">
                <span className="material-symbols-outlined">social_leaderboard</span>
              </a>
              <a className="text-slate-500 hover:text-blue-700 transition-all scale-105" href="#">
                <span className="material-symbols-outlined">camera_indoor</span>
              </a>
              <a className="text-slate-500 hover:text-blue-700 transition-all scale-105" href="#">
                <span className="material-symbols-outlined">play_circle</span>
              </a>
            </div>
          </div>
          {/* <!-- Quick Links --> */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-primary mb-4 text-xs tracking-widest uppercase">Empresa</h4>
              <ul className="flex flex-col gap-2 text-sm text-slate-500">
                <li className=""><a className="hover:text-blue-800 transition-all" href="#">Inicio</a></li>
                <li className=""><a className="hover:text-blue-800 transition-all" href="#">Sobre Nosotros</a>
                </li>
                <li className=""><a className="hover:text-blue-800 transition-all" href="#">Servicios</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4 text-xs tracking-widest uppercase">Inmuebles</h4>
              <ul className="flex flex-col gap-2 text-sm text-slate-500">
                <li className=""><a className="hover:text-blue-800 transition-all" href="#">Ventas</a></li>
                <li className=""><a className="hover:text-blue-800 transition-all" href="#">Alquileres</a></li>
              </ul>
            </div>
          </div>
          {/* <!-- Contact Info --> */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-primary mb-2 text-xs tracking-widest uppercase">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                Av. Libertador 12500, Martínez, BA
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                +54 (011) 4793-0000
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                info@lopezpropiedades.com.ar
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 px-6 md:px-12 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500"
        >
          © 2024 Lopez Propiedades. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;