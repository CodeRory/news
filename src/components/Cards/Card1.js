import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Share from '../Share/Share';
import land3 from '../Cards/land3.png';

const useStyles = makeStyles({
  root: {
   
  },
  
});


function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>      
      <Button onClick={handleClickOpen('body')} id='readMoreCssBigText'>Read More</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Aenean dui sem</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(1)]
              .map(
                () => `Vestibulum convallis, velit gravida pellentesque porta, velit ex congue nisi, non lacinia lacus massa at neque. Nulla ultrices cursus erat posuere suscipit. Nam ac mauris lorem. Vivamus imperdiet posuere arcu, quis elementum felis volutpat nec. Aenean ut sagittis massa. Praesent iaculis ornare nulla nec commodo. Nunc in velit nisl. Nam consectetur orci a nisl pharetra, in congue tortor aliquam. Suspendisse potenti..`,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>          
          <Button onClick={handleClose} color="primary">
            Back
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



export default function ImgMediaCard1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="The most important pic"
          
          image={land3}
          title="The most important pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Aenean dui sem
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Maecenas ligula diam, viverra a enim quis, rhoncus mattis sem. Aenean non felis vitae mauris consequat laoreet vel et ex. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <div size="small" color="primary" id='readMoreCssBig' >
          <ScrollDialog />
        </div>
        <Button size="small" color="primary" id='socialMediaBig'>
          <Share />
        </Button>
      </CardActions>
      
    </Card>
  );
}
