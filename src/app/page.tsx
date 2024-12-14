"use client";

import ListOfGifs from "@/components/ListOfGifs";
import { useContext, useEffect } from "react";
import GlobalContext from "../contexts/global";
import { APIGifArrayResponse } from "../types";
import styles from "./page.module.css";

export default function Home() {
  const { setEnd, offset, addGifs, gifs } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      const APIResponse = await fetch(`/api/trending?offset=${offset}`);
      const newGifs: APIGifArrayResponse = await APIResponse.json();

      if (!addGifs(newGifs.data)) {
        setEnd();
      }
    })();
  }, [offset]);

  return (
    <div className={styles.container}>
      <div>
        <h2>Trending Gifs🔥</h2>
        <hr />
      </div>
      <div>
        <ListOfGifs data={Array.from(gifs.values())} />
      </div>
    </div>
  );
}
