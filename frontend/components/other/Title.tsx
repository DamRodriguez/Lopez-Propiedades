import clsx from "clsx";

type TitleProps = {
  title: string;
  withUnderline?: boolean;
  titleClassName?: string;
}

const Title = (props: TitleProps) => {
  return (
    <div>
      <h2 className={clsx("text-2xl xl:text-4xl font-extrabold text-black mb-2", props.titleClassName)}>
        {props.title}
      </h2>
      {props.withUnderline && (
        <div className="h-1 xl:h-1.5 w-24 bg-secondary-dark rounded-full"></div>
      )}
    </div>
  );
};

export default Title;