import BtnBgSvg from "../../assets/svg/btnBgSvg";

import styles from "./button.module.sass";

export const Button = ({ children }) => {
  console.log(styles);

  return (
    <div className={styles.btn}>
      <div className={styles.bg}>
        <BtnBgSvg />
      </div>
      <div className={styles.text}>{children}</div>
    </div>
  );
};
