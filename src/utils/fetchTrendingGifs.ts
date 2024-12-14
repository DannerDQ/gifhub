"use server";
import { TRENDING_ENDPOINT } from "@/config";
import useFetch from "@/hooks/useFetch";
import { APIGifArrayResponse } from "@/types";

export default async function fetchTrendingGifs(
  offset: number
): Promise<APIGifArrayResponse> {
  const url = `${TRENDING_ENDPOINT}&offset=${offset}`;

  const { data: APIresponse, error } = await useFetch<APIGifArrayResponse>(url);

  return new Promise((resolve, reject) => {
    if (APIresponse) {
      resolve(APIresponse);
    }

    reject(error ?? "Error al obtener los datos");
  });
}
