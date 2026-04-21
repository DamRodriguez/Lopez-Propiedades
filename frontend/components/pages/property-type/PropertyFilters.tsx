"use client";
import { useCallback, useEffect, useState } from "react";
import { PropertyCategories } from "@/types/property";
import { CheckIcon, FilterIcon } from "@/components/icons/filter";
import { BaseOption, InputCombobox } from "@/components/ui/inputs/InputCombobox";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/buttons/Button";

export interface LocationOption extends BaseOption {
  name: string;
}

const CATEGORY_LABELS: Record<PropertyCategories, string> = {
  casa: "Casa",
  departamento: "Departamento",
  ph: "PH",
  lote: "Lote",
};

const CATEGORY_OPTIONS: PropertyCategories[] = ["casa", "departamento", "ph", "lote"];

interface PropertyFiltersProps {
  locationOptions: LocationOption[];
  locationFilter: LocationOption;
  setLocationFilter: (option: LocationOption) => void;
  priceFilter: number;
  setPriceFilter: (price: number) => void;
  bedroomsFilter: number;
  setBedroomsFilter: (num: number) => void;
  categoryFilter: PropertyCategories[];
  handleCategoryChange: (category: PropertyCategories) => void;
  clearFilters: () => void;
}

const InnerFilterFields = ({
  props,
  onClose
}: {
  props: PropertyFiltersProps;
  onClose?: () => void
}) => (
  <div className="space-y-8">
    <div>
      <label className="text-black font-semibold mb-3 text-base block">UBICACIÓN</label>
      <InputCombobox<LocationOption>
        options={props.locationOptions}
        value={props.locationFilter}
        onChange={props.setLocationFilter}
        renderOption={(option) => <span className="text-sm">{option.name}</span>}
        inputClassName="!bg-light-gray"
        optionsContainerClassName="bg-light-gray"
        optionClassName="hover:bg-primary hover:text-soft-white"
      />
    </div>

    <div>
      <label className="text-black font-semibold mb-3 text-base block">PRECIO MÁXIMO</label>
      <input
        className="w-full accent-primary cursor-pointer"
        max="300000"
        min="0"
        step="1000"
        type="range"
        value={props.priceFilter}
        onChange={(e) => props.setPriceFilter(Number(e.target.value))}
      />
      <div className="flex justify-between text-xs font-bold text-black mt-2">
        <span>$ 0</span>
        <span>$ {(props.priceFilter / 1000).toFixed(0)}{props.priceFilter === 0 ? "" : "k"}</span>
      </div>
    </div>

    <div>
      <label className="text-black font-semibold mb-3 text-base block">DORMITORIOS MÍNIMOS</label>
      <div className="flex gap-2">
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            onClick={() => props.setBedroomsFilter(num === props.bedroomsFilter ? 0 : num)}
            className={clsx(
              "cursor-pointer shadow-s2 hover:bg-primary hover:text-soft-white flex-1 py-2 rounded-xs text-xs font-bold custom-transition-all",
              props.bedroomsFilter === num ? "bg-primary text-soft-white" : "bg-light-gray"
            )}
          >
            {num}+
          </button>
        ))}
      </div>
    </div>

    <div>
      <label className="text-black font-semibold mb-3 text-base block">TIPO DE PROPIEDAD</label>
      <div className="space-y-3">
        {CATEGORY_OPTIONS.map((cat) => {
          const isChecked = props.categoryFilter.includes(cat);
          return (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={() => props.handleCategoryChange(cat)}
              />
              <div className={clsx(
                "w-5 h-5 rounded-xs border-2 flex items-center justify-center custom-transition-all",
                isChecked ? "bg-primary border-primary" : "bg-transparent border-soft-gray/40 group-hover:border-primary"
              )}>
                {isChecked && <CheckIcon />}
              </div>
              <span className={clsx(
                "text-sm custom-transition-all",
                isChecked ? "text-black font-medium" : "text-dark-gray group-hover:text-black"
              )}>
                {CATEGORY_LABELS[cat]}
              </span>
            </label>
          );
        })}
      </div>
    </div>

    <div className="space-y-4">
      <Button
        onClick={props.clearFilters}
        variant="primary"
        full
        customUppercase
      >
        Limpiar Filtros
      </Button>

      {onClose && (
        <div className="lg:hidden">
          <Button
            onClick={onClose}
            variant="tertiary"
            full
            customUppercase
          >
            Ver Resultados
          </Button>
        </div>
      )}
    </div>
  </div>
);

export default function PropertyFilters(props: PropertyFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const lockScroll = useCallback(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${String(scrollbarWidth)}px`;
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
  }, []);

  useEffect(() => {
    if (isOpen) lockScroll();
    else unlockScroll();
    return () => unlockScroll();
  }, [isOpen, lockScroll, unlockScroll]);

  return (
    <>
      <div className="lg:hidden sticky top-21 z-20">
        <Button
          onClick={() => setIsOpen(true)}
          variant="tertiary"
          className="flex items-center gap-2 justify-center w-full"
          customUppercase
        >
          <FilterIcon className="!w-7 !h-7 stroke-soft-white" />
          Filtros
        </Button>
      </div>

      <aside className="hidden lg:block w-72 flex-shrink-0">
        <div className="bg-white p-8 rounded-xs sticky top-28 shadow-s3">
          <div className="mb-6 flex items-center gap-2">
            <FilterIcon className="stroke-black" />
            <p className="text-black font-bold text-base xl:text-lg">
              Filtros
            </p>
          </div>
          <InnerFilterFields props={props} />
        </div>
      </aside>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-[0.5rem]"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xs p-[1rem] max-h-[85vh] overflow-y-auto"
            >
              <InnerFilterFields props={props} onClose={() => setIsOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}