import { BaseOption, InputCombobox } from "@/components/ui/inputs/InputCombobox";
import { useMemo, useState } from "react";
import rentalsProperties from "@/data/rentalsProperties.json";
import salesProperties from "@/data/salesProperties.json";
import LinkButton from "@/components/ui/buttons/LinkButton";
import { LocationIcon, SearchIcon } from "@/components/icons/homeHero";
import TypeSwitcher, { SwitcherType } from "./TypeSwitcher";
import { routes } from "@/constants/routes";

interface LocationOption extends BaseOption {
  name: string;
}

const SearchBar = () => {
  const [typeSwitcherFilter, setTypeSwitcherFilter] = useState<SwitcherType>("venta");
  const properties = [...salesProperties, ...rentalsProperties];
  const formattedType = typeSwitcherFilter === "venta" ? "ventas" : "alquileres";

  const locationOptions = useMemo(() => {
    const unique = new Set(properties.map((p) => p.location.neighborhood));
    const options: LocationOption[] = Array.from(unique).sort().map((name) => ({
      id: name,
      name: name,
    }));
    return [...options];
  }, [properties]);

  const [locationFilter, setLocationFilter] = useState<LocationOption>();

  return (
    <div className="p-2 rounded-xs shadow-s2 inline-block w-full max-w-3xl bg-soft-gray/30 border border-soft-gray/20 backdrop-blur-[0.5rem]">
      <div className="flex flex-col md:flex-row items-center gap-2 xl:gap-4">
        <div className="flex-1 w-full relative">
          <InputCombobox<LocationOption>
            options={locationOptions}
            value={locationFilter}
            onChange={setLocationFilter}
            renderOption={(option) => <span className="text-sm">{option.name}</span>}
            placeholderLeftIcon={<LocationIcon />}
            placeholder="¿Dónde quieres vivir?"
            containerClassName="[&_svg]:fill-soft-white"
            inputClassName="!bg-soft-gray/5 backdrop-blur-[0.5rem] text-soft-white !min-h-[3rem] "
            optionsContainerClassName="!bg-[#787878] text-soft-white"
            optionClassName="hover:bg-primary"
            placeholderClassName="text-soft-white tracking-wide !text-sm"
          />
        </div>
        <TypeSwitcher onChange={(value) => setTypeSwitcherFilter(value)} />
        <LinkButton
          href={routes.propertyType(formattedType)}
          query={{
            location: locationFilter?.name
          }}
          className="!px-8 tracking-wide h-[3rem] w-full md:w-auto"
        >
          <SearchIcon />
          <p>BUSCAR</p>
        </LinkButton>
      </div>
    </div>
  );
};

export default SearchBar;