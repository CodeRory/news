import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import ChatIcon from '@material-ui/icons/Chat';
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

  menuButton: {    
    /* marginRight: theme.spacing(0), 
    marginLeft: theme.spacing(22) */
    marginLeft: '13%',
       
  },

  hide: {
    display: 'none',
  },

  drawer: {    
    width: drawerWidth,
    /* flexShrink: 0, */
    zIndex: '3',
  },

  drawerPaper: {
    width: drawerWidth,
  },

  drawerHeader: {    
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

    content: {    
    /* flexGrow: 1, */
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },

  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const iconList= [<LooksOneIcon/>, <LooksTwoIcon/>, <Looks3Icon/>, <Looks4Icon/>]
 
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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



         
      
      <div className='onlyDrawer'>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />} 
            </IconButton>
          </div>
          <Divider />          
          <List>
            {['Section 1', 'Section 2', 'Section 3', 'Section 4'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{iconList[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Section 5', 'Section  6',].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <ChatIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >      
        </main>      
      </div> 
      </div>    
    </div>      
  );
}