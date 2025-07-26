import CarouselFront from "./CarouselFront";
import HeaderNav from "./HeaderNav";
import Footer from "../components/Footer";
import BodyContent from "../components/BodyContent";
import PricingInfo from "../components/PricingInfo";
import WhatsappSocial from "../components/WhatsappSocial";
import InformacionUtil from "../components/InformacionUtil";
import ArticleContent from "../components/ArticleContent";
import ProductDestac from "../components/ProductDestac";
import About from "../components/About";
import "../index.css";

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
          <About />
          <ArticleContent />
          <ProductDestac />
        </main>
        <Footer />
        <WhatsappSocial />
      </div>

  );
};

export default Home;
