import { Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import styles from "./adoptionSection.module.css"
import DogImage from "@/dog.webp";
import CatImage from "@/cat.webp";
import HamsterImage from "@/ham.webp";

const AdoptionSection = () => {
    const pets = [
        {
          type: "Perros",
          image: DogImage.src,
          to: "#",
        },
        {
          type: "Gatos",
          image: CatImage.src,
          to: "#",
        },
        {
          type: "Otros",
          image: HamsterImage.src,
          to: "#",
        },
    ];
    
    return ( 
        <>
            <Grid
                sx={{
                    p:8,
                }}
                container
                direction="column"
                alignItems="center"
                maxWidth={1000}
            >
                <Typography className={styles.text_title_pets}>
                    ¿Quieres <span className={styles.text_title_span}>adoptar</span> una
                    mascota ?
                </Typography>
            </Grid>
            <Stack
            direction="row"
            justifyContent="center"
            sx={{ flexWrap: "wrap" }}
            >
            {pets.map((pet) => {
                return (
                <CardActionArea sx={{ maxWidth: "300px", margin: 3 }} key={pet.type}>
                    <Link href={pet.to} style={{ textDecoration: 'none' }}>
                        <Card style={{boxShadow: "none"}}>
                            <CardMedia
                            component="img"
                            height="300"
                            image={pet.image}
                            alt="pet"
                            sx={{ borderRadius: 50 }}
                            />
                            <CardContent>
                                <Typography variant="h5" align="center" sx={{pb: 3}}>
                                    {pet.type}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </CardActionArea>
                );
            })}
            </Stack>
      </>
  
     );
}
 
export default AdoptionSection;