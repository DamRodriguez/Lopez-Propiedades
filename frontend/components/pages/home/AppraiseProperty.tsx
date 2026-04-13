import Image from "next/image";
import SpaceX from "@/components/layout/SpaceX";
import LinkButton from "@/components/ui/buttons/LinkButton";

const AppraiseProperty = () => {
  return (
    <SpaceX className="mx-auto">
      <div className="relative rounded-3xl p-8 xl:p-14 overflow-hidden shadow-s6 group min-h-[20rem] flex items-center">
        <Image
          src="/images/home/appraise.png"
          alt="Tasación de propiedades"
          fill
          className="object-cover -z-20 group-hover:scale-110 custom-transition-all"
        />

        <div className="absolute inset-0 bg-gradient-to-b xl:bg-gradient-to-r from-primary via-primary/85 to-primary-light -z-10" />

        <div className="z-10 flex flex-col xl:flex-row items-center justify-between gap-10 w-full">
          <div className="text-soft-white w-full xl:w-3/5 space-y-4 text-center xl:text-start">
            <h2 className="text-3xl xl:text-4xl font-bold tracking-tight">
              ¿Quieres tasar tu propiedad?
            </h2>
            <p className="text-base xl:text-lg text-soft-white/90 max-w-xl leading-relaxed">
              Realizamos tasaciones profesionales en el día para que conozcas el
              <span className="font-semibold text-soft-white">
                valor real
              </span>
              de tu inversión en el mercado actual.
            </p>
          </div>

          <LinkButton
            href=""
            variant="secondary"
            big
          >
            <span className="font-bold tracking-wider text-sm xl:text-base">
              SOLICITAR TASACIÓN
            </span>
          </LinkButton>
        </div>
      </div>
    </SpaceX>
  );
};

export default AppraiseProperty;