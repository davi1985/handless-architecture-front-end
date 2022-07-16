import { FilterButton } from "./components/FilterButton";
import { SmartphoneItem } from "./components/SmartphoneItem";
import { useSmartphones } from "./hooks/useSmartphones";

export function App() {
  const { setManufacturer, setStorage, smartphones, normalizeData } =
    useSmartphones();

  return (
    <section className="max-w-5xl m-auto shadow-lg">
      <h1 className="text-center text-3xl text-blue-700 font-bold mt-4">
        Celulares a Preço de Fábrica
      </h1>

      <div className="flex w-full space-x-6 mt-12">
        <div className="flex flex-col shadow items-center p-6 w-full">
          <label className="text-lg font-bold">Armazenamento</label>
          <div className="flex space-x-2 mt-6">
            <FilterButton onClick={() => setStorage("")}>Todos</FilterButton>

            {normalizeData(smartphones as [], "storage").map((item) => (
              <FilterButton onClick={() => setStorage("64GB")} key={item}>
                {item}
              </FilterButton>
            ))}
          </div>
        </div>

        <div className="flex flex-col shadow items-center p-6 w-full">
          <label className="text-lg font-bold">Marca</label>
          <div className="flex space-x-2 mt-6">
            <FilterButton onClick={() => setManufacturer("")}>
              Todas
            </FilterButton>

            {smartphones &&
              normalizeData(smartphones as [], "manufacturer").map((item) => (
                <FilterButton onClick={() => setManufacturer(item)} key={item}>
                  {item}
                </FilterButton>
              ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-around space-y-12 mt-12">
        {smartphones?.map((smartphone) => (
          <SmartphoneItem data={smartphone} key={smartphone.id} />
        ))}
      </div>
    </section>
  );
}
