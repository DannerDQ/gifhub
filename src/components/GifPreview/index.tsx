import { APIGifData } from "@/src/types.d";
import nextColor from "@/src/utils/nextColor";
import Image from "next/image";
import { memo } from "react";
import styles from "./styles.module.css";

function GifPreview({ data }: { data: APIGifData }) {
  const bgColor = nextColor().next();

  return (
    <div
      className={styles.gif}
      style={{ backgroundColor: bgColor.done ? "transparent" : bgColor.value }}
    >
      <picture>
        <source
          srcSet={data.images.original.webp}
          media="(min-width: 1024px)"
        />
        <source
          srcSet={data.images.fixed_width.webp}
          media="(min-width: 780px)"
        />
        <Image
          src={data.images.fixed_width.webp}
          alt={data.alt_text}
          width={data.images.fixed_width.width}
          height={data.images.fixed_width.height}
          loading="lazy"
          unoptimized
        />
      </picture>
      <span>{data.title}</span>
    </div>
  );
}

export default memo(GifPreview, (prevProps, nextProps) => {
  return prevProps.data.id === nextProps.data.id;
});