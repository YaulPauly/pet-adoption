import Banner from "../components/Banner";
import Header from "../components/Header";
import BannerPerros from "../../public/images/perro-banner.webp"

const Perros = () => {
    return ( <>
        <Header />
        <Banner banner={BannerPerros.src}/>
    </> );
}
 
export default Perros;