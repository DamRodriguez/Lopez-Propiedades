import clsx from "clsx";

export const FilterIcon = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="35" height="35" viewBox="0 0 21 21"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5h12m-10 3h8m-6 3h4" /></svg>
  );
};

export const DownArrowIcon = ({ className }: { className: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20">
      <path d="M10.103 12.778L16.81 6.08a.69.69 0 0 1 .99.012a.726.726 0 0 1-.012 1.012l-7.203 7.193a.69.69 0 0 1-.985-.006L2.205 6.72a.727.727 0 0 1 0-1.01a.69.69 0 0 1 .99 0l6.908 7.068Z" />
    </svg>
  );
};

export const UpArrowIcon = ({ className }: { className: string }) => {
  return (
    <DownArrowIcon
      className={clsx("rotate-180", className)}
    />
  );
};

export const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg className={className} width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path fillRule="evenodd" d="M12 5l-8 8l-4-4l1.5-1.5L4 10l6.5-6.5L12 5z" fill="#fff" /></svg>
  );
};