import Header from "../components/Header";
import BannerOtros from "../../public/images/banner-other.webp"
import Banner from "../components/Banner";

const Otros = () => {
    return ( <>
        <Header />
        <Banner banner={BannerOtros.src}/>
    </> );
}
 
export default Otros;