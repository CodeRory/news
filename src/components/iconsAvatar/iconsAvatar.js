import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PrintThisComponent from '../Print/Print';



import '../iconsAvatar/iconsAvatar.css';

const useStyles = makeStyles((theme) => ({  
  root: {    
    /* textDecoration: 'none',
    marginLeft: '35%',
    display: 'flex',
    '& > *': {      
      width: theme.spacing(4), solo dan problemas
      height: theme.spacing(4), 
      textDecoration: 'none',      
      }, */
  },
  pink: {
    backgroundColor: 'white',
    color: 'secondary',       
  },

  green: {
    color: '#fff',
    backgroundColor: green[500],
    textDecoration: 'none',
  },  
   
  
  
}));






export default function IconAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='avatarsRight'>
      <ul id='avatars'>
        <Avatar  className={classes.green}>
          <a href="/#" style={{textDecoration: 'none', color: 'white', cursor: 'wait'}}><MarkunreadIcon /></a>
        </Avatar>
        <Avatar className={classes.pink} id='remMov'>
          <a href="/#" ><PrintThisComponent /></a>
        </Avatar>
        <Avatar >
          <a href="/#" style={{textDecoration: 'none', color: 'white'}}><PersonPinIcon /></a>      
        </Avatar>
      </ul>
    </div>
  );
}
