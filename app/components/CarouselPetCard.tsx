'use client'

import { Card, CardActionArea, ImageListItemBar } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ICarouselPetCard {
    petId: string
    nombre: string
    imagen: string
    genero: string
}


const CarouselPetCard: React.FC<ICarouselPetCard> = ({petId, nombre, imagen, genero}) => {
    const router = useRouter()

    return (
        <CardActionArea onClick={() => router.push(`/perros/${petId}`)} sx={{ width:'300px', height: '250px', marginBottom: '50px', textAlign: 'center' }}>
            <Card>
                <Image src={imagen} alt="card" width={300} height={250} blurDataURL={imagen} />
                <ImageListItemBar title={nombre} subtitle={`Sexo: ${genero}`} />
            </Card>
        </CardActionArea>
    );
}

export default CarouselPetCard;