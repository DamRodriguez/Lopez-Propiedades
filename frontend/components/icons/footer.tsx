const iconSize = 15;

export const LocationIcon = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={iconSize} height={iconSize} viewBox="0 0 21 21" fill="#fff"><g fill="none" fillRule="evenodd" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" transform="translate(4 2)"><path d="m6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 0 0 2.564 3.05z" /><circle cx="6.5" cy="6.5" r="2.5" /></g></svg>
  );
};

export const CallIcon = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} className={className} viewBox="0 0 24 24"><path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.778 11.942C2.83 10.29 2.372 8.94 2.096 7.572c-.408-2.024.526-4.001 2.073-5.263c.654-.533 1.404-.35 1.791.343l.873 1.567c.692 1.242 1.038 1.862.97 2.52c-.069.659-.536 1.195-1.469 2.267zm0 0c1.919 3.346 4.93 6.36 8.28 8.28m0 0c1.653.948 3.002 1.406 4.37 1.682c2.024.408 4.001-.526 5.262-2.073c.534-.654.351-1.404-.342-1.791l-1.567-.873c-1.242-.692-1.862-1.038-2.52-.97c-.659.069-1.195.536-2.267 1.469z" color="currentColor" /></svg>
  );
};

export const EmailIcon = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={iconSize} height={iconSize} viewBox="0 0 16 16"><path fill="#fff" fillRule="evenodd" d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z" /></svg>
  );
};

export const CodeIcon = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} width={iconSize} height={iconSize} viewBox="0 0 17 16"><path fill="#fff" fillRule="evenodd" d="M11.74 11.993a.714.714 0 0 0 .493-.195l3.479-3.316a.644.644 0 0 0 0-.939l-3.479-3.318a.72.72 0 0 0-.984 0a.643.643 0 0 0 0 .938l2.987 2.85l-2.987 2.848a.643.643 0 0 0 0 .938a.713.713 0 0 0 .491.194zm-7.439-.11a.727.727 0 0 1-.497-.19L.287 8.425a.62.62 0 0 1 0-.923l3.517-3.268a.74.74 0 0 1 .995 0a.624.624 0 0 1 0 .924l-3.02 2.805l3.02 2.804a.626.626 0 0 1 0 .926a.736.736 0 0 1-.498.19zm2.384 3.006a.672.672 0 0 0 .503-.51L9.934 1.885a.636.636 0 0 0-.488-.768a.661.661 0 0 0-.77.514L5.93 14.125a.636.636 0 0 0 .755.764z" /></svg>
  );
};

