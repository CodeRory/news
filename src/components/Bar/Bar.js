import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import '../Bar/Bar.css';


function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button variant="outlined" color="primary" onClick={handleClickOpen} id='sectionButtonDialog'>
        {props.children}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"This is just a template"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          In this area, you would be send to another section of this website.
          </DialogContentText>
        </DialogContent>
        <DialogActions>          
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok, I get it
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}







export default function SearchAppBar() {  
  return (
    <div className='container'>
      <ul className='allSections'>
        <li><AlertDialog>Section 1</AlertDialog></li>
        <li><AlertDialog>Section 2</AlertDialog></li>
        <li><AlertDialog>Section 3</AlertDialog></li>
        <li><AlertDialog>Section 4</AlertDialog></li>
      </ul>  
    </div>    
  );
}
