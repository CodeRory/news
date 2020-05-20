import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import '../Cards/Cards.css';

import bird from '../Cards/bird.png';
import raccoon from '../Cards/raccoon.png';
import lion from '../Cards/lion.png';
import owl from '../Cards/owl.png';

import Share from '../Share/Share';


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
            <Button size="small" color="primary" >
              Read More
            </Button>
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
            <Button size="small" color="primary">
              Read More
            </Button>
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
            <Button size="small" color="primary">
              Read More
            </Button>
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
            <Button size="small" color="primary">
              Read More
            </Button>
            <Button size="small" color="primary" style={{display: 'flex',  alingContent: 'flex-end', marginLeft: '22%'}}>
              <Share />
            </Button>
          </CardActions>
        </Card>  
        
      </div>
      
      </div>
  );
}




