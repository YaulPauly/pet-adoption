import { Box } from "@mui/material";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import AdoptionSection from "./components/AdoptionSection";
import SearchSection from "./components/SearchSection";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1, display: { md: 'flex' }, alignItems: 'center', flexDirection: 'column'}}>
                <MainSection />
                <AdoptionSection />
                <SearchSection />
            </Box>
            <Footer />
        </>);
}
