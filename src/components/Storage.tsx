import { FilterButton } from "./FilterButton";

interface IStorage {
  setStorage: (value: React.SetStateAction<string | undefined>) => void;
}

export const Storage = ({ setStorage }: IStorage) => (
  <div className="flex flex-col shadow items-center p-6 w-full">
    <label className="text-lg font-bold">Armazenamento</label>
    <div className="flex space-x-2 mt-6">
      <FilterButton onClick={() => setStorage("")}>Todos</FilterButton>

      <FilterButton onClick={() => setStorage("64GB")}>64GB</FilterButton>
      <FilterButton onClick={() => setStorage("128GB")}>128GB</FilterButton>
      <FilterButton onClick={() => setStorage("256GB")}>256GB</FilterButton>
    </div>
  </div>
);
