import type { ToastProps } from "@/components/toast/Toast";
import { toast } from "react-toastify";
import Toast from "@/components/toast/Toast";

const showToast = (type: ToastProps["type"], text: ToastProps["text"], manualClose?: ToastProps["manualClose"]) => {
  toast[type](
    ({ closeToast }) => (
      <Toast text={text} type={type} closeToast={closeToast} manualClose={manualClose} />
    ),
    {
      position: "top-left",
      autoClose: 2500,
      closeButton: false,
      className: "top-[5rem] xl:top-[6rem]",
    },
  );
};

export default showToast;