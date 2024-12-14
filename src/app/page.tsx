import ListOfGifs from "@/components/ListOfGifs";
import { TRENDING_ENDPOINT } from "@/config";
import useFetch from "../hooks/useFetch";
import { APIGifArrayResponse } from "../types";
import styles from "./page.module.css";

export default async function Home() {
  const { data: APIresponse, error } = await useFetch<APIGifArrayResponse>(
    TRENDING_ENDPOINT
  );

  return (
    <div className={styles.container}>
      <div>
        <h2>Trending Gifs 🔥</h2>
        <hr />
      </div>
      <div>
        {APIresponse ? (
          <ListOfGifs data={APIresponse.data} />
        ) : (
          <h3>{error ?? "Error al obtener datos"}</h3>
        )}
      </div>
    </div>
  );
}
