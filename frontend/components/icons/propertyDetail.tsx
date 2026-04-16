import clsx from "clsx";

export const PictureIcon = ({ className }: { className?: string }) => {
  return (
    <svg width="30" height="30" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"><path fill="#fff" d="m3 4l1-2l1 3H1l1-2m5 4V2h1v6H1V7m5-1V1H0v5" /></svg>
  );
};

export const CloseIcon = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="20" height="20" viewBox="0 0 304 384"><path fill="#fff" d="M299 73L179 192l120 119l-30 30l-120-119L30 341L0 311l119-119L0 73l30-30l119 119L269 43z" /></svg>
  );
};

export const LeftIcon = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 7l-5 5l5 5" /></svg>
  );
};

export const RightIcon = ({ className }: { className?: string }) => {
  return (
    <LeftIcon className={clsx("rotate-180", className)} />
  );
};