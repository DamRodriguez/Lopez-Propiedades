"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export type SwitcherType = "venta" | "alquiler";

interface TypeSwitcherProps {
  onChange?: (selected: SwitcherType) => void;
}

const TypeSwitcher: React.FC<TypeSwitcherProps> = ({ onChange }) => {
  const [selectedOperation, setSelectedOperation] = useState<SwitcherType>("venta");

  const options = [
    { id: "venta", label: "Venta" },
    { id: "alquiler", label: "Alquiler" },
  ];

  const handleSelect = (id: SwitcherType) => {
    setSelectedOperation(id);
    if (onChange) {
      onChange(id);
    }
  };

  return (
    <div className="relative flex bg-soft-gray/5 backdrop-blur-[0.5rem] p-1 rounded-xs w-full md:w-auto overflow-hidden shadow-s2">

      {options.map((option, index) => {
        if (option.id !== selectedOperation) return null;

        return (
          <motion.div
            key="active_background"
            layoutId="activeBackgroundPill"
            className="absolute inset-y-1 z-0 rounded-xs bg-secondary"
            style={{
              left: index === 0 ? "4px" : "50%",
              width: "calc(50% - 4px)",
            }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        );
      })}

      {options.map((option) => {
        const isActive = selectedOperation === option.id;

        return (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id as SwitcherType)}
            className={clsx("relative z-10 flex-1 min-w-15 md:w-28 py-[0.6rem] px-4 rounded-xs text-sm font-semibold tracking-wide custom-transition-all flex items justify-center cursor-pointer hover:bg-soft-white/10", {
              "text-black": isActive,
              "text-soft-white": !isActive
            })}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

export default TypeSwitcher;