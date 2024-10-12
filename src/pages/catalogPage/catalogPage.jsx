import { useParams } from "react-router-dom";
import Header from "../../layout/header/header";
const CatalogPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <Header />
      Это каталог сайта
    </>
  );
};

export default CatalogPage;
