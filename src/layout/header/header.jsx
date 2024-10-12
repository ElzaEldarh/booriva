import { useState } from "react";
import styles from "./header.module.sass";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("https://640ef1d54ed25579dc40e2a6.mockapi.io/menu")
      .then((res) => res.json())
      .then((res) => setMenu(res));
  }, []);
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <nav className={styles.nav}>
          <Link to="/" className={styles.nav__item}>
            Главная
          </Link>
          {menu.map(({ id, name }) => (
            <Link to={`/catalog/${id}`} key={id} className={styles.nav__item}>
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
