import { Box } from "@mui/material";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

export default function Home() {
    return (
        <>
            <Header />
            <Box sx={{ flexGrow: 1, display: { md: 'flex' }, justifyContent: 'center' }}>
                <MainSection />
            </Box>
        </>);
}
