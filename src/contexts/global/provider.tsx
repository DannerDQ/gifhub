"use client";

import { APIGifData, props } from "@/src/types.d";
import { useCallback, useState } from "react";
import GlobalContext from ".";

export default function GlobalContextProvider({ children }: props) {
  const [offset, setOffset] = useState(0);
  const [gifs, setGifs] = useState<Map<string, APIGifData>>(new Map());
  const [isEnd, setIsEnd] = useState(false);

  const nextPage = useCallback(() => {
    setOffset((prev) => prev + 25);
  }, [setOffset]);

  const addGifs = useCallback(
    (gifsToAdd: APIGifData[]) => {
      const newMap = new Map(gifs);
      console.log({ newMap, gifs });

      gifsToAdd.forEach((gifData) => {
        if (!newMap.has(gifData.id)) {
          newMap.set(gifData.id, gifData);
        }
      });

      setGifs(newMap);

      return newMap.size > gifs.size;
    },
    [setGifs, gifs]
  );

  const setEnd = useCallback(() => setIsEnd(true), [setIsEnd]);

  return (
    <GlobalContext.Provider
      value={{ offset, gifs, isEnd, addGifs, nextPage, setEnd }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
