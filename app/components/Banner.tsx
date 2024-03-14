import { Container } from "@mui/material";
import Image from "next/image";
import styles from './banner.module.css'

interface IBanner {
    banner: string
}

const Banner: React.FC<IBanner> = ({banner}) => {
    return ( 
        <Container>
            <Image
                src={banner}
                alt= "banner"
                width={1200}
                height={450}
                className={styles.banner_image}
                priority
            />
        </Container>
     );
}
 
export default Banner;