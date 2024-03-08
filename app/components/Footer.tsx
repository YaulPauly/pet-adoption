import { Typography } from "@mui/material";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <Typography className={styles.text_title}>
                PET <span className={styles.text_span}>ADOPTION</span>
            </Typography>
            <span className={styles.text_content}>
                Diseñado y desarrollado por Paul Yauli &reg;
                {new Date().getFullYear()}
            </span>
        </footer>
    );
}

export default Footer;