import { CloseIcon } from "@/components/icons/header";

const CustomCloseButton = ({ closeToast }: { closeToast: () => void }) => (
  <button onClick={closeToast} className="cursor-pointer">
    <CloseIcon className="w-[1rem] h-[1rem] fill-[#000]" />
  </button>
);

export default CustomCloseButton;