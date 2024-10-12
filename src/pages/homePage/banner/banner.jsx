import styles from "./banner.module.sass";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <img className={styles.bannerImage} src="/baner.png" alt="baner" />
    </div>
  );
};
export default Banner;
