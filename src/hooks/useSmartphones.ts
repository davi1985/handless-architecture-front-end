import { useState } from "react";
import { ISmartphone } from "../components/SmartphoneItem";
import { paramsToString } from "../utils/utils";
import { useFetch } from "./useFetch";

interface IUseSmartphones {
  smartphones: ISmartphone[] | undefined;
  setManufacturer: React.Dispatch<React.SetStateAction<string | undefined>>;
  setStorage: React.Dispatch<React.SetStateAction<string | undefined>>;
  error: any;
}

export const useSmartphones = (): IUseSmartphones => {
  const [storage, setStorage] = useState<string>();
  const [manufacturer, setManufacturer] = useState<string>();

  const paramsString = new URLSearchParams(
    paramsToString(storage, manufacturer)
  );

  const { error, response } = useFetch<ISmartphone[]>(
    `http://localhost:3333/smartphones?${paramsString}`
  );

  return {
    smartphones: response,
    setManufacturer,
    setStorage,
    error,
  };
};
