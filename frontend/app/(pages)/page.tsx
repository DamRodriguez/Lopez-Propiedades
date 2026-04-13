import AppraiseProperty from "@/components/pages/home/AppraiseProperty";
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
      <AppraiseProperty />

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