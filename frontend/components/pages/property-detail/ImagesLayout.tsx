"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon, LeftIcon, PictureIcon, RightIcon } from "@/components/icons/propertyDetail";
import SpaceX from "@/components/layout/SpaceX";
import clsx from "clsx";
import { useScrollLock } from "@/hooks/useScrollLock";
import MotionFade from "@/components/motion/MotionFade";
import MotionSlide from "@/components/motion/MotionSlide";
import Spinner from "@/components/spinner/Spinner";

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
    <div className="grid grid-cols-12 gap-4 mb-3 xl:mb-8 h-[20rem] md:h-[30rem] xl:h-[40rem]">
      <MotionFade
        className="col-span-12 md:col-span-8 overflow-hidden rounded-xs relative group cursor-pointer"
        onClick={() => openCarousel(0)}
      >
        <Image
          src={mainImage}
          alt="Imágen principal"
          sizes="(max-width: 768px) 100vw, 66vw"
          fill
          priority
          quality={80}
          className="object-cover group-hover:scale-110 custom-transition-all bg-placeholder"
        />
      </MotionFade>

      <div className="hidden md:grid col-span-4 grid-rows-2 gap-4">
        <MotionSlide
          direction="up"
          className="overflow-hidden rounded-xs relative group cursor-pointer"
          onClick={() => openCarousel(1)}
        >
          <Image
            src={images[0] || mainImage}
            alt="Imágen secundaria primera"
            sizes="33vw"
            fill
            priority
            quality={80}
            className="object-cover group-hover:scale-110 custom-transition-all bg-placeholder"
          />
        </MotionSlide>

        <MotionSlide
          direction="down"
          className="overflow-hidden rounded-xs relative group cursor-pointer"
          onClick={() => openCarousel(2)}
        >
          <Image
            src={images[1] || mainImage}
            alt="Imagen secundaria segunda"
            sizes="33vw"
            fill
            priority
            quality={80}
            className="object-cover group-hover:scale-110 custom-transition-all bg-placeholder"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 opacity-100 group-hover:bg-black/30 custom-transition-all">
            <PictureIcon className="fill-soft-white" />
            <span className="text-soft-white font-semibold text-sm">
              Ver {allImages.length} fotos
            </span>
          </div>
        </MotionSlide>
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
            initial={{ scale: 0.90 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.90 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-0 z-10"
          >
            <Image
              src={images[index]}
              alt={`Galería ${index}`}
              sizes="(max-width: 768px) 100vw, 1200px"
              fill
              priority
              quality={80}
              className="object-contain"
            />
          </motion.div>

          <div className="h-full flex flex-col gap-4 justify-center items-center -z-10">
            <Spinner size={80} color="var(--color-placeholder)" />
          </div>

          <div className="fixed bottom-6 pb-[calc(env(safe-area-inset-bottom))] left-0 right-0 flex justify-center gap-10 z-20 pointer-events-none xl:absolute xl:pb-0 xl:bottom-auto xl:top-1/2 xl:-translate-y-1/2 xl:justify-between">
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