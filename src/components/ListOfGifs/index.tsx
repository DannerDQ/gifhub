import { ListOfGifsProps } from "@/src/types.d";
import Masonry from "react-masonry-css";
import GifPreview from "../GifPreview";
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
              <GifPreview data={gifData} />
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}

export default ListOfGifs;
