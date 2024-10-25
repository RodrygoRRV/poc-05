import Polaroid from "./components/Poc5";
import styles from "./components/poc5.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <Polaroid
          url="./assets/ferrari-1.webp"
          className={styles.polaroid1}
          text="Ferrari Vermelha"
        ></Polaroid>
        <Polaroid
          url="./assets/ferrari-2.jpeg"
          className={styles.polaroid2}
          text="Ferrari Azul"
        ></Polaroid>
      </div>
    </main>
  );
}
