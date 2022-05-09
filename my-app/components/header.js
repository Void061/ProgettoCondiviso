

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Fragment } from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect } from 'react';
import { Link } from '@mui/material';

export default function Header(){

  

/* CONTROLLO SCROLL */
const [scrollY, setScrollY] = useState(0);
useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
    
  };


  handleScroll();
  window.addEventListener("scroll", handleScroll);
  
return () => {
  
window.removeEventListener("scroll", handleScroll);

};


}, []);
/**** */

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      
      const list = (anchor) => (
        <Box
          sx={{  width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation" 
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>

          <Link className="links-nav" href="#ecosystem">
            <ListItem button >
                <ListItemIcon>
                  <HomeIcon sx={{color: 'white'}}/>
                </ListItemIcon>

                <ListItemText primary="Ecosystem"/>
                
            </ListItem>
            </Link>


             <Link className="links-nav" href="#comics">
            <ListItem button >
                <ListItemIcon>
                  <HomeIcon sx={{color: 'white'}}/>
                </ListItemIcon>

                <ListItemText primary="Comics"/>
                
            </ListItem>
            </Link>


            <Link className="links-nav" href="#how-to-buy">
            <ListItem button >
                <ListItemIcon>
                  <HomeIcon sx={{color: 'white'}}/>
                </ListItemIcon>

                <ListItemText primary="How to buy"/>
                
            </ListItem>
            </Link>

            <Link className="links-nav" href="#roadmap">
            <ListItem button >
                <ListItemIcon>
                  <HomeIcon sx={{color: 'white'}}/>
                </ListItemIcon>

                <ListItemText primary="Roadmap"/>
                
            </ListItem>
            </Link>

            <Link className="links-nav" href="#faq">
            <ListItem button >
                <ListItemIcon>
                  <HomeIcon sx={{color: 'white'}}/>
                </ListItemIcon>

                <ListItemText primary="Faq"/>
                
            </ListItem>
            </Link>
            
          </List>
          <Divider />
         
        </Box>
      );
    return(
        <div className={scrollY > 0 ? "header header-scrolled" : "header"}>
            
            <div className="brand">
            <Link href="/"> <img src="/images/logo.png" alt="brand" /></Link>
            </div>

            <ul className="nav">
                <li><a href="#ecosystem">Ecosystem</a></li>
                <li><a href="#comics">Comics</a></li>
                <li><a href="#how-to-buy">How to buy</a></li>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#faq">Faq</a></li>
            </ul>

            <div className='d-none d-md-flex'>
                <Link href="https://bscscan.com/token/0x8C3B58D50886dE1Da74CDd00aFac59dA0d4a2A2a"><button className="btn-1">BSC SCAN</button></Link>
            </div>



            {[<MenuIcon key="2" className="menu-responsive" sx={{color: 'white'}}/>].map((anchor) => (
        <Fragment key={anchor}>
          <Button className="menu-responsive" onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={'left'}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
        </div>
    )
}