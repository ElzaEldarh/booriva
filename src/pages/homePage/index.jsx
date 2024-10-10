import Banner from "../../components/banner/banner";
import Marquee from "../../components/marquee/marquee";
import { Button } from "../../components/button/button";

const HomePage = () => {
  return (
    <main>
      <Button>Платья</Button>
      <Banner/>
      <Marquee/>
    </main>
  );
};

export default HomePage;
