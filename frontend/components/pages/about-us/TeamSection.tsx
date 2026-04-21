import { MotionOpacity } from "@/components/motion/MotionOpacity";
import MotionSlide from "@/components/motion/MotionSlide";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Gabriel Lopez",
    position: "Abogado y martillero público recibido en la UBA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2llWrLRGadsBMboo3gMtDMYisxbXQdg4GxoZrnuDVhmd8qo6-HIBygM6UIgRArXqEMk0M9BDG4f1LK7A-2SmXwRUys_eWnjWvKMlYQpIWDW5SPz38xTBnxafRHWwri6vBH1I8DVbPviBuC_t3VvwtNPjb2zUQJMNgg1jkY22e6c-wBB1b1H_2WUknnOG0RxTDc0j--LauCQMCOGwWZ15X1AKxY_urrvq_HIw_UevmU-ST9i-xSUfBUy7meov9qGcLd3NKfBJ4sTc",
  },
  {
    id: 2,
    name: "Gustavo Arevalo",
    position: "Abogado recibido en la UBA",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCi048Y7JxzyWysTBSGF3riy5BCOHg_zmYRHk7Vb0VFORfXUS-XqsDeKBn7k6F524sq_Vav-8LCqlwyRJ4sZrGZDtUe7zcpVG9ecVobZWlF1IcUma-2_djCW12i07Blr6r8MPoN8mi3H7L5H5JaQAFgzTo7UhMvCbrnZDgCMbGgPpwqyAlV8-KmENvJI3G5bZc00dK0obX4Kgos4gmG0_SoblAfJfOeFJmg88_mYOrgJ08w8W7af8Ta1N_J-sH1VkN_I606CgQ981s",
  },
  {
    id: 3,
    name: "Belen Lopez",
    position: "Marketing Digital - experiencia profesional",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_ovoXHTzz-oo_nONpD6aQQ1aOwOanJozXojcKfDX7lFH-lQP6Z5Y4odvhnq7bh-OWi9qz5UzZurJA7iex6Id7_L-03pNE-1GX-12gTJ85Fky5N1Yb-7vdxjnr2HCy58o9URzh6Z3Pk66VgRIXf-a-DDE2qboAw2VSCDJxbI56KllHrN4zzG2fPWr5elW-clBs1t0sOdlbrwe8VelVvyopTvp8viQslRZcENp85Y3ZcihpdrL_8-swdXNej5o9MIyyC2HhDca7UTM",
  },
  {
    id: 4,
    name: "Agustin Lopez",
    position: "Asesor general en ventas y ceo oficial de Lopez Propiedades. Comercio Internacional.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASARRNdnrQ4whwLwQRMLRZezD423yq7rhafPyGMNgidEIuufigx-Oq23r5QehdWGSHnfdsPfEN3ZM3KJES1fx7K2UO4yQDc5JPIBXdrVbMdQNhHNWHB9sIwwtjjhE3kx9F5119agogO8v1NnlQ0b263Fixx5F4Do6VagkQSlkZl_I8v7iyc0-EWOfAurick_Vx8abAnbjxwJg0NEQi8HyYmMMJcmhqjJhNYQW7QgOylK9TUZyd7DI9jZ_bqSFHHvgJ7g3tt4MAFYQ",
  }
];

const TeamSection = () => {
  return (
    <section>
      <div className="mb-10 xl:mb-20 text-start lg:text-center">
        <MotionSlide>
          <h2 className="text-3xl xl:text-4xl font-extrabold text-black mb-3 xl:mb-4 tracking-tight">
            Nuestro Equipo
          </h2>
        </MotionSlide>
        <MotionOpacity>
          <p className="max-w-2xl font-light text-base xl:text-lg lg:mx-auto">
            Expertos apasionados por la arquitectura y el servicio personalizado, dedicados a superar sus expectativas.
          </p>
        </MotionOpacity>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {TEAM_MEMBERS.map((member) => (
          <MotionSlide direction="down" key={member.id} className="group">
            <div className="relative mb-4 xl:mb-6 overflow-hidden aspect-[3/4] rounded-xs">
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