import { Box, Button, Grid, Typography } from "@mui/material";
import Logo from "@/logo-polihuella.webp";
import Pet from "@/pets2.webp";
import Image from "next/image";
import styles from "./mainSection.module.css"
import Link from "next/link";

const MainSection = () => {
    return (
        <Grid
            sx={{
                backgroundColor: "#FAF1FA",
            }}
            container
            direction="row"
            alignItems="center"
            className={styles.main_section__container}
        >
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 1 }}>
                <Box className={styles.image_logo_container}>
                    <Image alt="logo" src={Logo} className={styles.logo_image}/>
                </Box>
                <Typography className={styles.text_content}>
                    El sitio ideal para encontrar un amigo de compañia y disfrutar bellos
                    momentos con él.
                </Typography>
                <Link href="#" passHref>
                    <Button variant="contained" className={styles.button_register}>
                    Registrate
                    </Button>
                </Link>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                order={{ xs: 2, sm: 2 }}
                className={styles.image_pet_main_container}
            >
                <Box>
                    <Image alt="mascota" src={Pet} className={styles.main_section_image}/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default MainSection;