import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import land1 from '../Cards/land1.png';
import land2 from '../Cards/land2.png';


import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '1%',
  },
  media: {
    
    paddingTop: '37.5%', 
  },
  
  
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <div>
    <Card className={classes.root}>
      
      <CardMedia
        className={classes.media}
        image={land1}
        title=""
      />
      <CardContent>
        <Typography variant="h9" color="textSecondary" component="p">
          Sed turpis urna, efficitur ac scelerisque vitae, vestibulum non libero.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" style={{marginLeft:   '35%'}}>
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <ThumbDownIcon />
        </IconButton>
        
      </CardActions>      
    </Card>

    



    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={land2}
        title=""
      />
      <CardContent>
        <Typography variant="h9" color="textSecondary" component="p">
            Aenean accumsan ex eu lacus porta, quis feugiat nisi semper.
        </Typography>
      </CardContent>
      <CardActions disableSpacing sytle={{display: 'flex', flexDirection: 'row', }}>
        <IconButton aria-label="add to favorites" style={{marginLeft:   '35%'}}>
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <ThumbDownIcon />
        </IconButton>       
      </CardActions>      
    </Card>

    </div>
  );
}


