import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import Share from '../Share/Share';


import land3 from '../Cards/land3.png';

const useStyles = makeStyles({
  root: {
   
  },
  
});

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
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
        <Button size="small" color="primary" style={{display: 'flex',  alingContent: 'flex-end', marginLeft: '38%'}}>
          <Share />
        </Button>
      </CardActions>
      
    </Card>
  );
}
