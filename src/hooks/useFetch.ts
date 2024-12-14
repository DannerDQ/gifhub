interface FetchReturn<T> {
  data?: T;
  error?: string;
}

export default async function useFetch<T = any>(
  url: string
): Promise<FetchReturn<T>> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error al obtener los datos :(");
    }

    const data: T = await response.json();

    return {
      data,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
}
