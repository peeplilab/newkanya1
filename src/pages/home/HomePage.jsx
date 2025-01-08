import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";
import TextSwitcher from "../textSwitcher/Headline";



const HomePage = () => {


    return (
        <Layout>
            <HeroSection />

            <Category />
            <h1></h1>
            <HomePageProductCard />

            {/* <Category/> */}

            <Track />
            {/* <TextSwitcher /> */}

            <Testimonial />
        </Layout>
    );
}

export default HomePage;
