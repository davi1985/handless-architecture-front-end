import { FilterButton } from "./FilterButton";

interface IManufacturer {
  setManufacturer: (value: React.SetStateAction<string | undefined>) => void;
}

export const Manufacturer = ({ setManufacturer }: IManufacturer) => (
  <div className="flex flex-col shadow items-center p-6 w-full">
    <label className="text-lg font-bold">Marca</label>
    <div className="flex space-x-2 mt-6">
      <FilterButton onClick={() => setManufacturer("")}>Todas</FilterButton>

      <FilterButton onClick={() => setManufacturer("Apple")}>
        Apple
      </FilterButton>

      <FilterButton onClick={() => setManufacturer("Samsung")}>
        Samsung
      </FilterButton>
    </div>
  </div>
);
