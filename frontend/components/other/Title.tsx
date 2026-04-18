import clsx from "clsx";
import MotionSlide from "../motion/MotionSlide";

type TitleProps = {
  title: string;
  withUnderline?: boolean;
  titleClassName?: string;
}

const Title = (props: TitleProps) => {
  return (
    <div>
      <MotionSlide>
        <h2 className={clsx("text-2xl xl:text-4xl font-extrabold text-black mb-2", props.titleClassName)}>
          {props.title}
        </h2>
      </MotionSlide>
      <MotionSlide direction="right">
        {props.withUnderline && (
          <div className="h-1 xl:h-1.5 w-24 bg-secondary-dark rounded-r-full"></div>
        )}
      </MotionSlide>
    </div>
  );
};

export default Title;