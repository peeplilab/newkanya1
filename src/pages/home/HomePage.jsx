import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import TextSwitcher from "../textSwitcher/Headline";
//const amazonScraper = require('amazon-scraper');



const HomePage = () => {
    // amazonScraper.asin('B0DP2TPV48', 'US').then((data) => {
    //     console.log(data);
    //   }).catch((error) => {
    //     console.error(error);
    //   });
      
    return (
        <Layout>
            {/* <TextSwitcher/> */}
            {/* <HeroSection/> */}
            <Category/>
<h1></h1>
            <HomePageProductCard/>

            {/* <Category/> */}

            <Track/>
            <Testimonial/>
        </Layout>
    );
}

export default HomePage;
