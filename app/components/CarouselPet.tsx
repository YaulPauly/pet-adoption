'use client'
import styles from './carouselPet.module.css'
import CarouselPetCard from "./CarouselPetCard";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderWrapper from "./_SlickSliderStyle";

const pets = [
    {
        id: '1',
        nombre: 'Rufus',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/poli-huellas-app.appspot.com/o/images%2F20nX57R2ZaaDP70fcyeArlr8kai2%2FpetImage-2023-12-25T23%3A48%3A42.907Z?alt=media&token=ea6c4175-197d-43cf-815b-967afe3c357f',
        genero: 'Macho',
        ubicacion: 'Arequipa',
        edad: '1',
        categoria: 'perro'
    },
    {
        id: '2',
        nombre: 'Sultan',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/poli-huellas-app.appspot.com/o/images%2F20nX57R2ZaaDP70fcyeArlr8kai2%2FpetImage-2023-12-25T23%3A47%3A08.625Z?alt=media&token=02235161-081c-4e92-84e7-897d432720c2',
        genero: 'Macho',
        ubicacion: 'Lima',
        edad: '3',
        categoria: 'perro'
    },
    {
        id: '3',
        nombre: 'Principe',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/poli-huellas-app.appspot.com/o/images%2F20nX57R2ZaaDP70fcyeArlr8kai2%2FpetImage-2023-12-25T23%3A44%3A40.961Z?alt=media&token=00bb5f6d-21ca-45ae-af2c-b3252d11cb2a',
        genero: 'Macho',
        ubicacion: 'Trujillo',
        edad: '2',
        categoria: 'perro'
    },
    {
        id: '4',
        nombre: 'Osa',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/poli-huellas-app.appspot.com/o/images%2F4xMKvExUtfaBbwm9fbf1Zm4RDeA3%2FpetImage-2023-10-24T21%3A40%3A51.083Z?alt=media&token=9fd252eb-025c-4227-ad8d-42ac79020714',
        genero: 'Hembra',
        ubicacion: 'Lima',
        edad: '1',
        categoria: 'perro'
    },
    {
        id: '5',
        nombre: 'Sultan',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/poli-huellas-app.appspot.com/o/images%2F20nX57R2ZaaDP70fcyeArlr8kai2%2FpetImage-2023-12-25T23%3A47%3A08.625Z?alt=media&token=02235161-081c-4e92-84e7-897d432720c2',
        genero: 'Macho',
        ubicacion: 'Lima',
        edad: '3',
        categoria: 'perro'
    },
    {
        id: '6',
        nombre: 'Sasha',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/poli-huellas-app.appspot.com/o/images%2F20nX57R2ZaaDP70fcyeArlr8kai2%2FpetImage-2023-12-25T23%3A44%3A40.961Z?alt=media&token=00bb5f6d-21ca-45ae-af2c-b3252d11cb2a',
        genero: 'Hembra',
        ubicacion: 'Trujillo',
        edad: '4',
        categoria: 'perro'
    },
    {
        id: '7',
        nombre: 'Sultan',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/poli-huellas-app.appspot.com/o/images%2F20nX57R2ZaaDP70fcyeArlr8kai2%2FpetImage-2023-12-25T23%3A47%3A08.625Z?alt=media&token=02235161-081c-4e92-84e7-897d432720c2',
        genero: 'Macho',
        ubicacion: 'Lima',
        edad: '3',
        categoria: 'perro'
    },
    {
        id: '8',
        nombre: 'Principe',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/poli-huellas-app.appspot.com/o/images%2F20nX57R2ZaaDP70fcyeArlr8kai2%2FpetImage-2023-12-25T23%3A44%3A40.961Z?alt=media&token=00bb5f6d-21ca-45ae-af2c-b3252d11cb2a',
        genero: 'Macho',
        ubicacion: 'Trujillo',
        edad: '2',
        categoria: 'perro'
    },
    {
        id: '9',
        nombre: 'Osa',
        imagen: 'https://firebasestorage.googleapis.com/v0/b/poli-huellas-app.appspot.com/o/images%2F4xMKvExUtfaBbwm9fbf1Zm4RDeA3%2FpetImage-2023-10-24T21%3A40%3A51.083Z?alt=media&token=9fd252eb-025c-4227-ad8d-42ac79020714',
        genero: 'Hembra',
        ubicacion: 'Lima',
        edad: '1',
        categoria: 'perro'
    },
]

const divDots = () => {
    return (
        <div className="ft-slick__dots--custom">
            <div className="loading" />
        </div>
    )
}

const CarouselPet: React.FC = () => {
    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        cssEase: "linear",
        adaptiveHeight: true,
        customPaging: divDots,
        responsive: [

            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <SliderWrapper>
                <Slider {...settings}>
                    {pets.map((pet) => (
                        <div key={pet.id}>
                            <div className={styles.carousel_item}>
                                <CarouselPetCard petId={pet.id} nombre={pet.nombre} imagen={pet.imagen} genero={pet.genero} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </SliderWrapper>
        </div>
    );
}

export default CarouselPet;