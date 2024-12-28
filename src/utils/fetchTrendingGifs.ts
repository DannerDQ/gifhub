"use server";
import { TRENDING_ENDPOINT } from "@/config";
import { APIGifArrayResponse } from "@/types";
import fetchData from "./fetchData";

export default async function fetchTrendingGifs(
  offset: number
): Promise<APIGifArrayResponse> {
  const url = `${TRENDING_ENDPOINT}&offset=${offset}`;

  const { data: APIresponse, error } = await fetchData<APIGifArrayResponse>(
    url
  );

  return new Promise((resolve, reject) => {
    if (APIresponse) {
      resolve(APIresponse);
    }

    reject(error ?? "Error al obtener los datos");
  });
}
