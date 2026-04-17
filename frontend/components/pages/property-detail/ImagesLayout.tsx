"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/social";
import { CloseIcon, LeftIcon, PictureIcon, RightIcon } from "@/components/icons/propertyDetail";
import SpaceX from "@/components/layout/SpaceX";
import clsx from "clsx";
import { useScrollLock } from "@/hooks/useScrollLock";

type ImagesLayoutProps = {
  mainImage: string;
  images: string[];
};

const ImagesLayout = ({ mainImage, images }: ImagesLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  useScrollLock(isOpen);

  const allImages = [mainImage, ...images];

  const openCarousel = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="grid grid-cols-12 gap-4 mb-4 xl:mb-10 h-[20rem] md:h-[40rem]">
      <div
        className="col-span-12 md:col-span-8 overflow-hidden rounded-xs relative group cursor-pointer"
        onClick={() => openCarousel(0)}
      >
        <Image
          fill
          alt="Vista principal"
          priority
          className="object-cover group-hover:scale-110 custom-transition-all"
          src={mainImage}
          sizes="(max-width: 768px) 100vw, 66vw"
        />
      </div>

      <div className="hidden md:grid col-span-4 grid-rows-2 gap-4">
        <div
          className="overflow-hidden rounded-xs relative group cursor-pointer"
          onClick={() => openCarousel(1)}
        >
          <Image
            fill
            alt="Interior vista"
            className="object-cover group-hover:scale-110 custom-transition-all"
            src={images[0] || mainImage}
            sizes="33vw"
          />
        </div>

        <div
          className="overflow-hidden rounded-xs relative group cursor-pointer"
          onClick={() => openCarousel(2)}
        >
          <Image
            fill
            alt="Interior vista 2"
            className="object-cover group-hover:scale-110 custom-transition-all"
            src={images[1] || mainImage}
            sizes="33vw"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 opacity-100 group-hover:bg-black/30 custom-transition-all">
            <PictureIcon />
            <span className="text-soft-white font-semibold text-sm">
              Ver {allImages.length} fotos
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <ImageCarouselModal
            images={allImages}
            initialIndex={currentIndex}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ImageCarouselModal = ({ images, initialIndex, onClose }: { images: string[], initialIndex: number, onClose: () => void }) => {
  const [index, setIndex] = useState(initialIndex);
  const hoverClassName = "cursor-pointer z-20 custom-transition-all bg-black hover:border-soft-white/50 hover:scale-105 custom-transition-all shadow-s3 border border-soft-white/10 pointer-events-auto";

  const next = useCallback(() => setIndex((prev) => (prev + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((prev) => (prev - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-20 bg-black/85 flex items-center justify-center backdrop-blur-[0.5rem]"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <SpaceX className="absolute top-25 xl:top-18 left-0 right-0 xl:p-10 flex justify-between items-center">
          <span className="text-base xl:text-lg font-medium text-soft-white">
            {index + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className={clsx("z-30 rounded-full cursor-pointer hover:scale-110 custom-transition-all")}
          >
            <CloseIcon className="w-6 h-6 xl:w-7 xl:h-7" />
          </button>
        </SpaceX>
      </div>

      <SpaceX className="relative w-full h-[100dvh] flex items-center justify-center pt-[4.5rem] xl:pt-[5.5rem]">
        <div
          className="relative w-full h-[60vh] xl:h-[75vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`Galería ${index}`}
              fill
              className="object-contain"
              quality={90}
            />
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 pb-4 xl:pb-0 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2 flex justify-center gap-10 xl:left-0 xl:right-0 xl:justify-between z-10 pointer-events-none">
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className={clsx("p-3 rounded-full pointer-events-auto", hoverClassName)}
            >
              <LeftIcon />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className={clsx("p-3 rounded-full pointer-events-auto", hoverClassName)}
            >
              <RightIcon />
            </button>
          </div>
        </div>
      </SpaceX>
    </motion.div>
  );
};

export default ImagesLayout;