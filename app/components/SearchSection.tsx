import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "./searchSection.module.css"
import Huella from "../../public/images/huella.webp";

const SearchSection = () => {
    return (
        <Grid
            container
            direction="row"
            alignItems="center"
            sx={{
                backgroundColor: "#FAF1FA",
                p: 6,
            }}
            maxWidth={1000}
        >
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                <Typography className={styles.text_title_search}>
                    Encuentra un <span className={styles.text_title_span}>amigo</span>{" "}
                    de Verdad!
                </Typography>
                <Typography className={styles.text_content_search}>
                    Está comprobado que tener una mascota en tu hogar mejora tu salud y
                    humor.
                </Typography>
                <Link href="/adopciones" passHref>
                    <Button variant="contained" className={styles.button_search}>
                        Buscar mascotas
                    </Button>
                </Link>
            </Grid>
            <Grid
                container
                item
                xs={12}
                sm={6}
                justifyContent="center"
                order={{ xs: 1, sm: 2 }}
            >
                <Box>
                    <Image src={Huella} width={250} height={150} alt="Huella"/>
                </Box>
            </Grid>
        </Grid>
    );
}

export default SearchSection;