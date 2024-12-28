import styles from "./styles.module.css";

export default function Glitch({ text }: { text: string }) {
  return (
    <div data-text={text} className={styles.glitch}>
      {text}
    </div>
  );
}
