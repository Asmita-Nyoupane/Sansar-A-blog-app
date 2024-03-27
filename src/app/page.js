import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          ducimus veniam eaque ex at possimus, sunt laudantium eius debitis
          quos.
        </p>
        <div className={styles.btns}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact Us</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="homepage image"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/hero.gif"
          alt="hero page image"
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
