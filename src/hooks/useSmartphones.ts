import { useState } from "react";
import { ISmartphone } from "../components/SmartphoneItem";
import { paramsToString } from "../utils/utils";
import { useFetch } from "./useFetch";

export const useSmartphones = () => {
  const [storage, setStorage] = useState<string>();
  const [manufacturer, setManufacturer] = useState<string>();

  const paramsString = new URLSearchParams(
    paramsToString(storage, manufacturer)
  );

  const { error, response } = useFetch<ISmartphone[]>(
    `http://localhost:3333/smartphones?${paramsString}`
  );

  const normalizeData = (
    arr: [],
    key: "storage" | "manufacturer"
  ): string[] => {
    const result = arr?.map((item) => item[key]);

    return [...new Set(result)];
  };

  return {
    smartphones: response,
    setManufacturer,
    setStorage,
    normalizeData,
  };
};
