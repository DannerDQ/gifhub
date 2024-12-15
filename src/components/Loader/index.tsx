import styles from "./styles.module.css";
export default function Loader() {
  return (
    <div className={styles.progress}>
      <div className={styles.flipper}></div>
      <div className={styles.flipper}></div>
      <div className={styles.flipper}></div>
      <div className={styles.flipper}></div>
      <div className={styles.flipper}></div>
    </div>
  );
}
