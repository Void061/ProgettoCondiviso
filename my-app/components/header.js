

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
            {['Home', 'Page1', 'Page2'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <HomeIcon sx={{color: 'white'}}/> : <HomeIcon sx={{color: 'white'}}/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
         
        </Box>
      );
    return(
        <div className={scrollY > 0 ? "header header-scrollato" : "header"}>
            
            <div className="brand">
                <img src="/images/logo.png" alt="brand" />
            </div>

            <ul className="nav">
                <li>Ecosystem</li>
                <li>Comics</li>
                <li>How to buy</li>
                <li>Roadmap</li>
                <li>Faq</li>
            </ul>

            <div>
                <button className="btn-1">BUY NOW</button>
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