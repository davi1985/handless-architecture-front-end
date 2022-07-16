import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
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
