import SpaceX from "@/components/layout/SpaceX";
import LinkButton from "@/components/ui/buttons/LinkButton";

const AppraiseProperty = () => {
  return (
    <SpaceX className="mx-auto">
      <div className="rounded-3xl p-8 xl:p-14 text-center xl:text-start overflow-hidden shadow-s6 group bg-gradient-to-b xl:bg-gradient-to-r from-primary to-primary-light">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10">
          <div className="text-soft-white w-full xl:w-3/5 space-y-4">
            <h2 className="text-2xl xl:text-3xl font-bold">
              ¿Quieres tasar tu propiedad?
            </h2>
            <p className="text-base xl:text-lg text-soft-white/80 max-w-xl font-light">
              Realizamos tasaciones profesionales en el día para que conozcas
              el valor real de tu inversión en el mercado actual.
            </p>
          </div>

          <div className="flex-shrink-0">
            <LinkButton
              href=""
              variant="secondary"
              className="px-10 py-5 shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <span className="font-semibold tracking-wide xl:text-base">
                SOLICITAR TASACIÓN
              </span>
            </LinkButton>
          </div>

        </div>
      </div>
    </SpaceX>
  );
};

export default AppraiseProperty;