"use client";
import { PictureIcon } from "@/components/icons/propertyDetail";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";
import { CloseIcon } from "@/components/icons/header";
import Image from "next/image";

export interface FileWithPreview extends File {
  preview: string;
}

export type InputDragFileProps = {
  className?: string;
  value?: any;
  onChange?: (value: File | File[] | null) => void;
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
  multiple = false,
}: InputDragFileProps) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const mimeMap = {
    image: { "image/*": [] },
    video: { "video/*": [] },
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: mimeMap[type],
    multiple: multiple,
    onDrop: (acceptedFiles) => {
      const mappedFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      const newFiles = multiple ? [...files, ...mappedFiles] : mappedFiles;

      setFiles(newFiles);

      if (onChange) {
        onChange(multiple ? newFiles : newFiles[0]);
      }
    },
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (fileToRemove: FileWithPreview, e: React.MouseEvent) => {
    e.stopPropagation();

    const newFiles = files.filter((file) => file !== fileToRemove);
    setFiles(newFiles);

    if (onChange) {
      onChange(newFiles.length > 0 ? (multiple ? newFiles : newFiles[0]) : null);
    }
  };

  const itemColor = (typeToColor: "icon" | "text") => {
    const isIcon = typeToColor === "icon";
    if (files.length > 0) return isIcon ? "fill-black/70" : "text-black/70";
    if (error) return isIcon ? "fill-error/70" : "text-error/70";
    return isIcon ? "fill-soft-gray" : "text-soft-gray";
  };

  return (
    <div
      {...getRootProps({
        className: clsx(
          "h-auto min-h-[8.875rem] py-[1.25rem] px-4 rounded-xs cursor-pointer flex flex-col items-center justify-center custom-transition-all",
          className,
          {
            "bg-error/5 shadow-s2": error,
            "bg-lighter-gray shadow-s2": isDragActive,
            "bg-[url('data:image/svg+xml,%3csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3e%3crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%20rx%3D%228%22%20ry%3D%228%22%20stroke%3D%22%23333%22%20stroke-width%3D%221%22%20stroke-dasharray%3D%2238%2C12%22%20stroke-dashoffset%3D%222%22%20stroke-linecap%3D%22square%22/%3e%3c/svg%3e')]": !error && !isDragActive,
          }
        ),
      })}
    >
      <input {...getInputProps()} />

      <div className="flex gap-[0.5rem] items-center justify-center mb-4">
        <p
          className={clsx(
            "text-sm xl:text-base font-bold leading-[2.25rem]",
            itemColor("text")
          )}
        >
          {files.length > 1
            ? `${files.length} archivos seleccionados`
            : files.length === 1
              ? "1 archivo seleccionado"
              : text}
        </p>
        <PictureIcon
          className={clsx(itemColor("icon"), "w-6 h-6 xl:w-8 xl:h-8")}
        />
      </div>

      {files.length > 0 && (
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {files.map((file) => (
            <div
              key={file.name}
              className="relative flex flex-col items-center gap-1 w-24"
            >
              <div className="relative rounded-xs shadow-s3 border border-black/20 overflow-hidden group">
                <Image
                  src={file.preview}
                  alt={file.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={(e) => removeFile(file, e)}
                  className="absolute top-1 right-1 bg-black hover:bg-dark-gray text-white rounded-full w-6 h-6 flex items-center justify-center xl:opacity-0 group-hover:opacity-100 custom-transition-all cursor-pointer shadow-s3 border border-white/50"
                  title="Eliminar foto"
                >
                  <CloseIcon className="fill-soft-white w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-black truncate w-full text-center">
                {file.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};