import Banner from "../components/Banner";
import Header from "../components/Header";
import BannerAdoption from "../../public/images/banner-adoptions.webp"
import Footer from "../components/Footer";
import { Box, Button, Container, Typography } from "@mui/material";
import styles from './adopciones.module.css'
import CarouselPet from "../components/CarouselPet";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Adopciones = () => {
    return (
        <>
            <Header />
            <Container>
                <Banner banner={BannerAdoption.src} />
                <Typography className={styles.title} variant="h5" color="inherit">
                    Últimas Publicaciones
                </Typography>
                <CarouselPet />
                <Typography className={styles.title} variant="h5" color="inherit">
                    Perros en Adopción
                </Typography>
                <CarouselPet />
                <Box className={styles.button_container}>
                    <Link href="/perros" passHref>
                        <Button
                            size="large"
                            variant="contained"
                            endIcon={<IoArrowForwardCircleOutline />}
                            className={styles.button_view_more}
                        >
                            Ver más
                        </Button>
                    </Link>
                </Box>
            </Container>
            <Footer />
        </>);
}

export default Adopciones;