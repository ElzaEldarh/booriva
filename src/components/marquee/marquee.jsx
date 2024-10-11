import styles from "./marquee.module.sass";
const Marquee = () => {
  const marqueeLine = Array(10).fill("ТОПОВЫЕ ТОВАРЫ");

  return (
    <div>
      <div className={styles.floatLine}>
        {marqueeLine.map((line, index) => (
          <p key={index} className={styles.floatLineItem}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Marquee;
