import CarouselFront from "./CarouselFront";
import HeaderNav from "../layout/HeaderNav";
import Footer from "../layout/Footer";
import BodyContent from "./BodyContent";
import PricingInfo from "./PricingInfo";
import WhatsappSocial from "../WhatsappSocial";
import InformacionUtil from "./InformacionUtil";
import ArticleContent from "./ArticleContent";
import ProductDestac from "./ProductDestac";

import "../../index.css";

const Home = () => {
  return (

      <div>
        <HeaderNav />
        <main>
        <CarouselFront />
          <PricingInfo />
          <InformacionUtil />
          <PricingInfo />
          <BodyContent />
          <ArticleContent />
          <ProductDestac />
        </main>
        <Footer />
        <WhatsappSocial />
      </div>

  );
};

export default Home;
