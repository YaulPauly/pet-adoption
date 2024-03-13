import Banner from "../components/Banner";
import Header from "../components/Header";
import BannerGatos from "../../public/images/gato-banner.webp"

const Gatos = () => {
    console.log({BannerGatos});
    
    return ( 
    <>
        <Header />
        <Banner banner={BannerGatos.src} />
    </> );
}
 
export default Gatos;