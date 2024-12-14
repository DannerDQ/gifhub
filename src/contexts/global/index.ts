import { GlobalContextInterface } from "@/src/types.d";
import { createContext } from "react";

const GlobalContext = createContext<GlobalContextInterface>({
  gifs: new Set(),
  offset: 0,
  isEnd: true,

  nextPage() {},
  addGif(id) {
    return false;
  },
  setEnd() {},
});

export default GlobalContext;
