import { APIGifData } from "@/src/types.d";
import nextColor from "@/src/utils/nextColor";
import Image from "next/image";
import styles from "./styles.module.css";

export default function GifPreview({ data }: { data: APIGifData }) {
  const bgColor = nextColor().next();

  return (
    <div
      className={styles.gif}
      style={{ backgroundColor: bgColor.done ? "transparent" : bgColor.value }}
    >
      <picture>
        <source srcSet={data.images.original.webp} media="(min-width: 780px)" />
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
