import ChooseUsSection from "@/components/pages/home/ChooseUsSection";
import FeaturedProperties from "@/components/pages/home/FeaturedProperties";
import Hero from "@/components/pages/home/Hero";
import Image from "next/image"

const HomePage = () => {
  return (
    <section className="flex flex-col gap-[5rem] xl:gap-[8rem]">
      <Hero />

      <FeaturedProperties />

      <ChooseUsSection />

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
    </section>
  );
};

export default HomePage;