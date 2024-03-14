'use client'

import { Card, CardActionArea, ImageListItemBar } from "@mui/material";
import { useRouter } from "next/navigation";
import BannerAdoption from "../../public/images/banner-adoptions.webp"
import styles from "./carouselPetCard.module.css"
import Image from "next/image";

const CarouselPetCard = () => {
    const petId = "a51a1g5adg48"
    const router = useRouter()

    return (
        <CardActionArea onClick={() => router.push(`/perros/${petId}`)} sx={{ width:'300px', height: '250px', marginBottom: '50px', textAlign: 'center' }}>
            <Card>
                <Image src={BannerAdoption.src} alt="card" width={300} height={250} />
                <ImageListItemBar title="Nombre" subtitle="sexo" />
            </Card>
        </CardActionArea>
    );
}

export default CarouselPetCard;