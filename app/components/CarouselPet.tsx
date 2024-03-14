import { Carousel, ConfigProvider } from "antd";
import styles from './carouselPet.module.css'
import CarouselPetCard from "./CarouselPetCard";

const CarouselPet: React.FC = () => {
    

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgContainer: "#7e41a1"
                },
            }}
        >
            <Carousel autoplay speed={1200}>
                <div>
                    <div className={styles.carousel_item}>
                        <CarouselPetCard />
                        <CarouselPetCard />
                        <CarouselPetCard />
                    </div>
                </div>
                <div>
                    <div className={styles.carousel_item}>
                        <CarouselPetCard />
                        <CarouselPetCard />
                        <CarouselPetCard />
                    </div>
                </div>
                <div>
                    <div className={styles.carousel_item}>
                        <CarouselPetCard />
                        <CarouselPetCard />
                        <CarouselPetCard />
                    </div>
                </div>
            </Carousel>
        </ConfigProvider>
    
    );
}

export default CarouselPet;