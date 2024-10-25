import styles from "./poc5.module.css";

export default Polaroid;

function Polaroid({ url, className, text }) {
  return (
    <figure className={className}>
      <img alt="imagem" src={url}></img>
      <figcaption className={styles.legenda}>{text}</figcaption>
    </figure>
  );
}
