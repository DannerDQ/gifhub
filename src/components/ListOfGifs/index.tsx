import { ListOfGifsProps } from "@/src/types.d";
import Image from "next/image";
import styles from "./styles.module.css";

function ListOfGifs({ data }: ListOfGifsProps) {
  return (
    <ul className={styles.list}>
      {data.map((gifData) => {
        return (
          <li key={gifData.id}>
            <Image
              src={gifData.images.fixed_width.url}
              alt={gifData.alt_text}
              width={gifData.images.fixed_width.width}
              height={gifData.images.fixed_width.height}
              unoptimized
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ListOfGifs;
