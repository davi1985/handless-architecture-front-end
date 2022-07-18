import { AllSmartphones } from "./components/AllSmartphones";
import { Manufacturer } from "./components/Manufacturer";
import { Storage } from "./components/Storage";
import { useSmartphones } from "./hooks/useSmartphones";

export function App() {
  const { setManufacturer, setStorage, smartphones, error } = useSmartphones();

  if (error) {
    return (
      <div className="max-w-5xl m-auto shadow-lg">
        <h1 className="text-center text-3xl text-red-700 font-bold mt-4">
          Não foi possivel carregar os dados.
        </h1>
      </div>
    );
  }

  return (
    <section className="max-w-5xl m-auto shadow-lg">
      <h1 className="text-center text-3xl text-blue-700 font-bold mt-4">
        Celulares a Preço de Fábrica
      </h1>

      <div className="flex w-full space-x-6 mt-12">
        <Storage setStorage={setStorage} />

        <Manufacturer setManufacturer={setManufacturer} />
      </div>

      <div className="flex flex-wrap justify-around space-y-12 mt-12">
        {smartphones && <AllSmartphones smartphones={smartphones} />}
      </div>
    </section>
  );
}
