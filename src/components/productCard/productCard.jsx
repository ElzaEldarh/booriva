import { useEffect, useState } from "react";
import styles from "./productCard.module.sass";

const ProductCard = () => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://65588446e93ca47020a966c9.mockapi.io/categoriesCatalog")
      .then((res) => res.json())
      .then((res) => setProducts(res[0].products));
  }, []);

  return (
    <div className="wrapper">
      <div className={styles.card__container}>
        {products.map(({ id, name, price, images }) => (
          <div key={id} className={styles.product__card}>
            <img
              src={images[0]}
              alt={name}
              className={styles.product__images}
            />
            <div className={styles.product__info}>
              <h3 className={styles.product__name}>{name}</h3>
              <p className={styles.product__price}>{price}₽</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
