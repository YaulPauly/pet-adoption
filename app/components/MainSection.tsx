import { Box, Grid, Typography } from "@mui/material";
import Logo from "../../public/images/logo-polihuella.webp";
import Pet from "../../public/images/pets2.webp";
import Image from "next/image";
import styles from "./mainSection.module.css"

const MainSection = () => {
    return (
        <Grid
            sx={{
                backgroundColor: "#FAF1FA",
            }}
            container
            direction="row"
            alignItems="center"
            maxWidth={1000}
        >
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 1 }}>
                <Box className={styles.image_logo_container}>
                    <Image alt="logo" src={Logo} style={{objectFit: "contain", maxWidth:355, maxHeight:94}} />
                </Box>
                <Typography className={styles.text_content}>
                    El sitio ideal para encontrar un amigo de compañia y disfrutar bellos
                    momentos con él.
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                sm={6}
                order={{ xs: 2, sm: 2 }}
                className={styles.image_pet_main_container}
            >
                <Box>
                    <Image alt="mascota" src={Pet} style={{objectFit: "contain", maxWidth:350, maxHeight:250}}/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default MainSection;