import Banner from "../components/Banner";
import Header from "../components/Header";
import BannerAdoption from "../../public/images/banner-adoptions.webp"

const Adopciones = () => {
    return ( 
    <>
        <Header />
        <Banner banner={BannerAdoption.src} />
    </> );
}
 
export default Adopciones;