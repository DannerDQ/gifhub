"use client";

import { GlobalContextInterface } from "@/src/types.d";
import { createContext } from "react";

const GlobalContext = createContext<GlobalContextInterface>({
  gifs: new Map(),
  offset: 0,
  isEnd: true,

  nextPage() {},
  addGifs(id) {
    return false;
  },
  setEnd() {},
});

export default GlobalContext;
