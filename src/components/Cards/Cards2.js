import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bird from '../Cards/bird.png';
import raccoon from '../Cards/raccoon.png';
import lion from '../Cards/lion.png';
import owl from '../Cards/owl.png';
import Share from '../Share/Share';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import '../Cards/Cards.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} id='fourSectionsReadMore'>
        {props.children}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.message}
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

export default function ImgMediaCard2() {
    return (
  <div>    
    <div className="card2Container">
      
        <Card className="cardC">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="first pic"
              id='cardI'
              image={owl}
              title="Lorem Ipsum 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Lorem Ipsum 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Nulla facilisi. Duis porta quam turpis, sit amet interdum mi bibendum nec. 
                Fusce hendrerit maximus cursus. 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div size="small" color="primary" id='readMoreCss' >
              <AlertDialogSlide title='Lorem Ipsum 1' message='Sed vestibulum mauris eget enim accumsan consectetur. Duis lectus nulla, consequat in cursus vel, dignissim ut risus. Aenean nisl orci, ultrices eget vulputate finibus, finibus quis elit. Integer pellentesque quam in ultricies convallis. Cras vel arcu sapien. Maecenas sed ipsum erat. Vivamus id elit pulvinar, consequat sapien et, finibus felis.'>Read More</AlertDialogSlide> 
            </div>
            <Button size="small" color="primary" style={{display: 'flex',  alingContent: 'flex-end', marginLeft: '22%'}}>
              <Share />
            </Button>
          </CardActions>
        </Card>
        
        <Card className="cardC">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              id='cardI'
              image={raccoon}
              title="Lorem Ipsum 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Lorem Ipsum 2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Vestibulum cursus euismod egestas. Pellentesque pretium justo sit amet neque ornare, sed elementum nisl placerat. 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <div size="small" color="primary" id='readMoreCss' >
          <AlertDialogSlide title='Lorem Ipsum 2' message='Vivamus non magna in sapien tristique viverra ac volutpat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Donec convallis in nisi eget suscipit. Donec mattis nisi hendrerit odio commodo, tincidunt placerat risus laoreet. Integer malesuada turpis id gravida egestas. Nullam at libero ac turpis vestibulum commodo in sit amet libero.'>Read More</AlertDialogSlide> 
        </div>
            <Button size="small" color="primary" style={{display: 'flex',  alingContent: 'flex-end', marginLeft: '22%'}}>
              <Share />
            </Button>
          </CardActions>
        </Card>   
      </div>  

    <div className="card2Container">
      
        <Card className="cardC">
          <CardActionArea>
            <CardMedia
              id='cardI'
              component="img"
              alt="Contemplative Reptile"
              
              image={bird}
              title="Lorem Ipsum 3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Lorem Ipsum 3
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Proin tempor posuere magna, in mollis metus maximus quis. Morbi consectetur faucibus massa, vel luctus tellus auctor a.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <div size="small" color="primary" id='readMoreCss' >
          <AlertDialogSlide title='Lorem Ipsum 3' message='Vestibulum sed ante eu nisi ornare pretium id vitae turpis. Vivamus ullamcorper hendrerit neque ac fermentum. Vestibulum vitae molestie nibh, et porta dolor. Vivamus facilisis nec diam at semper. Cras turpis leo, placerat at volutpat vitae, dignissim sit amet lacus. Pellentesque enim turpis, tincidunt id eros nec, efficitur pellentesque sapien.'>Read More</AlertDialogSlide> 
        </div>
            <Button size="small" color="primary" style={{display: 'flex',  alingContent: 'flex-end', marginLeft: '22%'}}>
              <Share />
            </Button>
          </CardActions>
        </Card>

        <Card className="cardC">
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              id='cardI'
              image={lion}
              title="Lorem Ipsum 4"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Lorem Ipsum 4
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Nunc nunc sem, ultricies a erat in, hendrerit sagittis metus. Donec ultrices dolor vitae maximus consequat.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <div size="small" color="primary" id='readMoreCss' >
          <AlertDialogSlide title='Lorem Ipsum 4' message='Nunc in tempus justo. Sed luctus eros vitae gravida venenatis. Nunc molestie eros vitae sodales gravida. Vestibulum tincidunt sagittis quam quis suscipit. Mauris semper lacus sed enim dapibus blandit. Vivamus est augue, finibus ac urna sit amet, malesuada rutrum dui. Donec malesuada sollicitudin posuere. Suspendisse potenti. Quisque id auctor ex, ut molestie ligula. Aenean ut porta felis, vel tempor ex.'>Read More</AlertDialogSlide> 
        </div>
            <Button size="small" color="primary" style={{display: 'flex',  alingContent: 'flex-end', marginLeft: '22%'}}>
              <Share />
            </Button>
          </CardActions>
        </Card>  
        
      </div>
      
      </div>
  );
}




