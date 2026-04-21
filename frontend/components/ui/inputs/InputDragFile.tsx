import { PictureIcon } from "@/components/icons/propertyDetail";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";

export type InputDragFileProps = {
  className?: string;
  value?: string;
  onChange?: (value: File | File[]) => void;
  text?: string;
  type?: "image" | "video";
  error?: boolean;
  multiple?: boolean;
};

export const InputDragFile = ({
  className,
  onChange,
  text,
  type = "image",
  error,
  multiple = false
}: InputDragFileProps) => {

  const mimeMap = {
    image: { "image/*": [] },
    video: { "video/*": [] },
  };

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: (files) => {
      if (onChange) {
        onChange(multiple ? files : files[0]);
      }
    },
    multiple: multiple,
    accept: mimeMap[type],
  });

  const ImageIconColor = () => {
    if (acceptedFiles.length > 0) return "fill-success";
    if (error) return "fill-error";
    return "fill-black";
  };

  return (
    <div {...getRootProps({
      className: clsx(
        "bg-[url('data:image/svg+xml,%3csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3e%3crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%20rx%3D%228%22%20ry%3D%228%22%20stroke%3D%22%23333%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%2238%2C12%22%20stroke-dashoffset%3D%222%22%20stroke-linecap%3D%22square%22/%3e%3c/svg%3e')] h-auto min-h-[8.875rem] py-[1.25rem] rounded-[0.5rem] cursor-pointer flex flex-col items-center justify-center transition-all",
        className,
        { "border-2 border-error": error }
      )
    })}>
      <input {...getInputProps()} />

      <div className="flex gap-[0.5rem] items-center justify-center">
        <p className={clsx(
          "text-h6 font-bold leading-[2.25rem]",
          {
            "text-soft-gray": acceptedFiles.length === 0,
            "text-success": acceptedFiles.length > 0,
            "text-error ": error,
          },
        )}>
          {acceptedFiles.length > 0
            ? `${acceptedFiles.length} archivo(s) seleccionado(s)`
            : text}
        </p>
        <PictureIcon className={ImageIconColor()} />
      </div>

      {acceptedFiles.length > 0 && (
        <ul className="text-b2 text-soft-gray mt-2 text-center px-4">
          {acceptedFiles.map((file: any) => (
            <li key={file.path} className="truncate max-w-[250px]">
              {file.name || file.path?.replace("./", "")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};