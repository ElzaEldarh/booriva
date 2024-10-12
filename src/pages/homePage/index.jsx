import Banner from "./banner/banner";
import Marquee from "../../components/marquee/marquee";
import { Button } from "../../components/button/button";
import BoorivaStore from "../../components/boorivaStore/boorivaStore";
import InstaPage from "../../layout/instaPage/instaPage";
import { Link } from "react-router-dom";
import Header from "../../layout/header/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Link to="/catalog">
          <Button>СМОТРЕТЬ ВСЕ</Button>
        </Link>
        <Banner />
        <BoorivaStore />
        <Marquee />
        <InstaPage />
      </main>
    </>
  );
};

export default HomePage;
