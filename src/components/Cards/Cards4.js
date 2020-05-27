import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import squi from '../Cards/squi.png';
import fox from '../Cards/fox.png';
import gir from '../Cards/gir.png';

import '../Cards/Cards.css';


const useStyles = makeStyles((theme) => ({
  
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9    
    minHeight: '200px',
  },
  
  
  
}));

export default function RecipeReviewCard3() {
  const classes = useStyles();
  

  

  return (
    <div className="three">
    <Card className="card3C">
      <CardMedia
        className={classes.media}
        image={squi}
        title="/#"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Donec fermentum id lectus ut faucibus. Phasellus ultricies metus eget orci lobortis facilisis a eu urna. 
          Nulla condimentum nec velit at porta. 
        </Typography>
      </CardContent>      
    </Card>




    <Card className='card3C'>
      <CardMedia
        className={classes.media}
        image={fox}
        title="/#"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Morbi scelerisque dolor a erat maximus, eget bibendum elit sagittis. 
        Sed vel enim egestas, ullamcorper nunc eu, auctor odio. Sed at dolor neque.
        </Typography>
      </CardContent>      
    </Card>


    <Card className='card3C'>
      <CardMedia
        className={classes.media}
        image={gir}
        title="/#"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Sed quis accumsan nisl. Nulla tempor rutrum bibendum. 
        Praesent accumsan, quam eget mollis fermentum, mi ligula ultricies sapien, non tincidunt mi turpis a urna.
        </Typography>
      </CardContent>  
      </Card>




    </div>
  );
}
