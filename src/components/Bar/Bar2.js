import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import RssFeedIcon from '@material-ui/icons/RssFeed';

import '../Bar/Bar.css';

export default function SearchAppBar2() {
 

  return (
    <div className="bar2">
      <AppBar position="static" className="bar2" >
        <Toolbar>
          <ul className="socialmedia" style={{textDecoration: 'none'}}>
            <a href="" ><FacebookIcon style={{textDecoration: 'none'}}/></a>
            <a href="" ><InstagramIcon/></a>
            <a href="" ><TwitterIcon/></a>
            <a href="" ><RssFeedIcon/></a>
          </ul>
        <div id="rory">
          <div >© CodeRory</div>
        </div>
          
            
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
