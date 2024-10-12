import Banner from "../../components/banner/banner";
import Marquee from "../../components/marquee/marquee";
import { Button } from "../../components/button/button";
import BoorivaStore from "../../components/boorivaStore/boorivaStore"
import Footer from "../../layout/footer/footer"
import InstaPage from "../../layout/instaPage/instaPage";

const HomePage = () => {
  return (
    <main>
      <Button>СМОТРЕТЬ ВСЕ</Button>
      <Banner/>
      <BoorivaStore/>
      <Marquee/>
      <InstaPage/>
      <Footer/>
    </main>
  );
};

export default HomePage;
