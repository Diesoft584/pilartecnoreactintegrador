import React, { useRef, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    IconButton,
    Container,
    Avatar,
    Button,
    List,
    ListItemText,
    Drawer,
    MenuItem as MenuItemMui,
    Popover
} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu"
import { drawerMenu, popMenu } from '../../constants/menu'
import MenuItem from '../../components/MenuItem';



const MenuPopover = ({ children, sx, ...other }) => {
    return (
        <Popover
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            paperProps={{ sx }}
            {...other}
        >
            {children}
        </Popover>
    )
}


const PopMenu = () => {
    const navigate = useNavigate()
    const menuRef = useRef(null)
    const [open, setOpen] = useState(false)
    return (
        <Box>
            <IconButton
                size="small"
                sx={{ ml: 2 }}
                onClick={() => setOpen(true)}
                ref={menuRef}
            >
                <Avatar sx={{ width: 32, height: 32 }}>OD</Avatar>
            </IconButton>
            <MenuPopover open={open} onClose={() => setOpen(false)}
                anchorEl={menuRef.current} sx={{
                    marginTop: 2.5, marginLeft: 0.5,
                    overflow: 'inherit', boxShadow: '1px, 1px, 2px, 2px rgb(0 0 0 / 20%)',
                    width: 320
                }} >
                {popMenu.map((item, index) => (
                    <MenuItemMui key={index} to={item.path}
                        component={RouterLink} onClick={() => setOpen(false)} sx={{ py: 1, px: 2.5 }}
                    >
                        <ListItemText disableTypography>{item.title}</ListItemText>
                    </MenuItemMui>
                ))}
            </MenuPopover>
        </Box>
    )
}



const drawerWidth = 240;


const Menu = ({ items }) => {
    return (
        <List>
            {
                items.map(item => <MenuItem item={item} />)
            }
        </List>
    )
}




const SideMenu = ({ open, onClose }) => {
    const { pathname } = useLocation()
    useEffect(() => {
        if (open) {
            onClose()
        }
    }, [pathname])
    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer open={open} onClose={onClose} sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}>
                <Menu items={drawerMenu} />
            </Drawer>
        </Box>
    )
}





const DashboardLayout = () => {

    const [open, setOpen] = useState(false)

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar position="absolute">
                <Toolbar
                    sx={{
                        pr: "24px",
                    }}
                >
                    <Button sx={{ color: '#FFF' }} onClick={() => setOpen(true)}>
                        <MenuIcon />
                    </Button>
                    <SideMenu open={open} onClose={() => setOpen(false)} />
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        PilarWebReactIntegrador
                    </Typography>
                    <PopMenu />
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: "100vh",
                    overflow: "auto",
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Outlet />
                </Container>
            </Box>
        </Box>
    )
}

export default DashboardLayout;