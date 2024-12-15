import Loader from "@/components/Loader";
import GlobalContext from "@/contexts/global";
import useObserver from "@/src/hooks/useObserver";
import { useContext, useEffect } from "react";

export default function Observer() {
  const { ref, isIntersecting } = useObserver();
  const { nextPage } = useContext(GlobalContext);

  useEffect(() => {
    if (isIntersecting) {
      console.log("inter");
      nextPage();
    }
  }, [nextPage, isIntersecting]);

  return (
    <div ref={ref}>
      <Loader />
    </div>
  );
}
