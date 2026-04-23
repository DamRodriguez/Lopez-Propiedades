import { MotionOpacity } from "@/components/motion/MotionOpacity";
import MotionSlide from "@/components/motion/MotionSlide";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Gabriel Lopez",
    position: "Fundador ∙ Abogado y martillero público (UBA) ∙ MN. 2054 ∙ 30 años en el mercado",
    image: "/images/team/gabriel.jpeg"
  },
  {
    id: 2,
    name: "Gustavo Ariel Arevalo",
    position: "Asesor jurídico ∙ Derecho civil, inmobiliario y laboral ∙ UBA",
    image: "/images/team/gustavo.jpeg",
  },
  {
    id: 3,
    name: "Belén Lopez",
    position: "Marketing y comunicación ∙ Responsable de estrategia digital y presentación de propiedades",
    image: "/images/team/belen.jpeg",
  },
  {
    id: 4,
    name: "Agustin Lopez",
    position: "Director comercial ∙ Asesor en ventas e inversiones ∙ Lic. en Comercio Internacional",
    image: "/images/team/agustin.jpeg",
  }
];

const TeamSection = () => {
  return (
    <section>
      <div className="mb-10 xl:mb-20 text-start lg:text-center">
        <MotionSlide>
          <h2 className="text-3xl xl:text-4xl font-extrabold text-black mb-3 xl:mb-4 tracking-tight">
            Nuestro <span className="text-primary-light/70">Equipo</span>
          </h2>
        </MotionSlide>
        <MotionOpacity>
          <p className="max-w-2xl font-light text-base xl:text-lg lg:mx-auto">
            Cuatro personas reales, con nombre y apellido, que atienden personalmente cada consulta. Sin asistentes ni operadores: siempre hablás con quien conoce tu caso.
          </p>
        </MotionOpacity>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {TEAM_MEMBERS.map((member) => (
          <MotionSlide direction="down" key={member.id} className="group">
            <div className="relative mb-4 xl:mb-6 overflow-hidden aspect-[3/4] rounded-xs shadow-s3">
              <img
                src={member.image}
                alt={`Imágen de ${member.name}`}
                className="w-full h-full object-cover custom-transition-all group-hover:scale-110"
              />
            </div>
            <h4 className="text-center sm:text-start text-base xl:text-xl font-bold text-black">
              {member.name}
            </h4>
            <p className="text-black/60 text-xs text-center sm:text-start uppercase font-bold tracking-widest mt-1">
              {member.position}
            </p>
          </MotionSlide>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;