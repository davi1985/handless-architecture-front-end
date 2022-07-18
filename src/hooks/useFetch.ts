import { useEffect, useState } from "react";

interface IUseFetch<T> {
  response: T | undefined;
  error: any;
}

export const useFetch = <T>(url: string): IUseFetch<T> => {
  const [response, setResposne] = useState<T>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setResposne(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return {
    response,
    error,
  };
};
