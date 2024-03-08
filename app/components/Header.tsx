'use client'
import { FaDog } from "react-icons/fa";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { MouseEvent, useState } from 'react';
import styles from './header.module.css'
import Sidebar from "./Sidebar";
import Link from "next/link";

const pages = ['Inicio', 'Adopciones', 'Perros', 'Gatos', 'Otros', '¿Cómo Adoptar?', 'Dar en Adopción'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setIsOpen(!isOpen);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="static" className={styles.navbar}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <FaDog className={styles.search_icon_full} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#101011',
                                textDecoration: 'none',
                                paddingTop: '4px',
                                marginLeft: '5px'
                            }}
                        >
                            PET <span className={styles.text_span}> ADOPTION</span>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' }
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Link href="#">
                                <Button sx={{ p: 0 }} className={styles.button_login}>
                                    Iniciar sesión
                                </Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Sidebar isOpen={isOpen ? 'block' : 'none'} />
        </>
    );
}
export default Header;