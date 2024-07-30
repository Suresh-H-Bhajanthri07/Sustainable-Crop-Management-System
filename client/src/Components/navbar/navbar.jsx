
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './navbarstyle.css';
import LanguageSwitcher from '../languageswitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function DrawerAppBar(props) {
  const { t } = useTranslation();

  const drawerWidth = 240;
  const navItemKeys = ['header.home', 'header.services', 'header.login', 'header.contact'];

  const sectionIDs = ['HOME', 'SERVICES', 'LOGIN', 'CONTACT'];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItemKeys.map((item, index) => ( // Add index parameter here
          <ListItem key={item} disablePadding>
            <a className='drawerLink' sx={{ textAlign: 'center' }} href={"#" + sectionIDs[index]}>{t(item)}</a>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" id="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItemKeys.map((item, index) => (
              <a href={"#" + sectionIDs[index]} key={item} sx={{ color: '#fff' }}>{t(item)}</a>
            ))}
          </Box>
          <Box>
            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }} id="HOME">
        <Toolbar />
        <Typography component={'div'}>
          <>
          <h1 className="content-1">{t('services.title')}</h1>
          <h1 className="content-2">{t('services.description')}</h1>
          <a href="#SERVICES" className='bt-1'>{t('company.slogan')}</a>
          </>
        </Typography>
      </Box>
    </Box>
  );
}
