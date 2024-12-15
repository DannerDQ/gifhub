import { ListOfGifsProps } from "@/src/types.d";
import Image from "next/image";
import Masonry from "react-masonry-css";
import styles from "./styles.module.css";

function ListOfGifs({ data }: ListOfGifsProps) {
  const breakpoints = {
    500: 2,
    768: 3,
    820: 4,
    1024: 5,
    default: 6,
  };

  return (
    <div>
      <div></div>
      <Masonry
        className={styles.list}
        breakpointCols={breakpoints}
        columnClassName={styles.column}
      >
        {data.map((gifData) => {
          return (
            <div key={gifData.id} className={styles.item}>
              <Image
                src={gifData.images.fixed_width.url}
                alt={gifData.alt_text}
                width={gifData.images.fixed_width.width}
                height={gifData.images.fixed_width.height}
                unoptimized
              />
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}

export default ListOfGifs;
