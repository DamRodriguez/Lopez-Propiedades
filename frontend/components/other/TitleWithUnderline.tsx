type TitleWithUnderlineProps = {
  title: string;
}

const TitleWithUnderline = (props: TitleWithUnderlineProps) => {
  return (
    <div>
      <h2 className="text-2xl xl:text-4xl font-extrabold text-black mb-2">
        {props.title}
      </h2>
      <div className="h-1 xl:h-1.5 w-24 bg-secondary rounded-full"></div>
    </div>
  );
};

export default TitleWithUnderline;