"use client";

import { props } from "@/src/types.d";
import { useCallback, useState } from "react";
import GlobalContext from ".";

export default function GlobalContextProvider({ children }: props) {
  const [offset, setOffset] = useState(0);
  const [gifs, setGifs] = useState<Set<string>>(new Set());
  const [isEnd, setIsEnd] = useState(false);

  const nextPage = useCallback(() => {
    setOffset((prev) => prev + 25);
  }, [setOffset]);

  const addGif = useCallback(
    (id: string) => {
      if (gifs.has(id)) return false;
      setGifs((prev) => new Set(prev).add(id));

      return true;
    },
    [setGifs]
  );

  const setEnd = useCallback(() => setIsEnd(true), [setIsEnd]);

  return (
    <GlobalContext.Provider
      value={{ offset, gifs, isEnd, addGif, nextPage, setEnd }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
