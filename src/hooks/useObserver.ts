"use client";

import { useEffect, useRef, useState } from "react";

export default function useObserver() {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(
    function () {
      if (!ref.current) return;

      const currentElm = ref.current;

      const observer = new IntersectionObserver(
        (entries) => {
          const elm = entries[0];

          setIsIntersecting(elm.isIntersecting);
        },
        {
          root: null,
          rootMargin: "300px",
          threshold: 0,
        }
      );

      observer.observe(currentElm);

      return () => {
        observer.unobserve(currentElm);
        observer.disconnect();
      };
    },
    [ref]
  );

  return { ref, isIntersecting };
}
