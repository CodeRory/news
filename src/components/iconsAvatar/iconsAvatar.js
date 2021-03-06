import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import PrintThisComponent from '../Print/Print';
import SimpleDialog from '../Dialogs/Account';


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
          
  },

  green: {
    color: 'black',
    backgroundColor: 'white',
    textDecoration: 'none',
  },  
}));






export default function IconAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='avatarsRight'>
      <ul id='avatars'>
        <Avatar  className={classes.green}>
          <a href="/#" style={{textDecoration: 'none', color: '#3f51b5', cursor: 'wait'}}><MarkunreadIcon /></a>
        </Avatar>
        <Avatar className={classes.pink} id='remMov'>
          <a href="/#" ><PrintThisComponent style={{color: '#3f51b5', backgroundColor: '#3f51b5'}}/></a>
        </Avatar>
        <Avatar className={classes.green} id='logIn'>
          <a href="/#" id='logIn'><SimpleDialog /></a>      
        </Avatar>
      </ul>
    </div>
  );
}
