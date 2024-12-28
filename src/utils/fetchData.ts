interface FetchReturn<T> {
  data?: T;
  error?: string;
}


export default async function fetchData<T = never>(
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
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }

    return {
      error: "Error al obtener los datos :(",
    };
  }
}
