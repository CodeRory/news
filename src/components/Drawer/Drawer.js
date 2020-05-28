import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconAvatars from '../iconsAvatar/iconsAvatar';
import TemporaryDrawer from '../Drawer/Temporary';

import '../Drawer/Drawer.css';


const drawerWidth = 245;
const useStyles = makeStyles((theme) => ({
  root: {    
    display: 'flex',    
  },

  appBar: {        
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen, 
      zIndex: theme.zIndex.drawer + 1,
    }),
  },

  appBarShift: {    
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },  
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();  
  const [open, setOpen] = React.useState(false); 
  return (
    <div className="container">
      <div className='allBarWithoutDrawer'>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar >
          <TemporaryDrawer /> 
            
            <Typography id="titulo" variant="h6" noWrap >
              <a href="/#" style={{textDecoration: 'none', color: 'white'}}>Lorem Ipsum</a>
            </Typography>
            <IconAvatars />
            
          </Toolbar>
        </AppBar>
      </div>   
     
      </div>    
    </div>      
  );
}