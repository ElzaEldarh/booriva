import BtnBgSvg from "../../assets/svg/btnBgSvg";

import styles from "./button.module.sass";

export const Button = ({ children }) => {
  return (
    <div className="container">
      <div className={styles.btn}>
        <div className={styles.bg}>
          <BtnBgSvg />
        </div>
        <div className={styles.text}>{children}</div>
      </div>
    </div>
  );
};
