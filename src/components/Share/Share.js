import React, { Component } from 'react';
import {
  /* FacebookShareCount,
  PinterestShareCount,  
  RedditShareCount,
  TumblrShareCount, */
  FacebookShareButton,
  /* FacebookMessengerShareButton,
  FacebookMessengerIcon, */
  /* LinkedinShareButton, */
  TwitterShareButton,
  /* PinterestShareButton,
  VKShareButton,
  OKShareButton, */
  TelegramShareButton,
  WhatsappShareButton,
  /* RedditShareButton, */
  EmailShareButton,
  /* TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,*/
 /*  InstapaperShareButton,  */
  FacebookIcon,
  TwitterIcon,
  /* LinkedinIcon, */
  /* PinterestIcon,
  VKIcon,
  OKIcon, */
  TelegramIcon,
  WhatsappIcon,
  /* RedditIcon,
  TumblrIcon,
  MailruIcon, */
  EmailIcon,
  /* LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  WeiboIcon,  */
} from 'react-share';

/* import MoreHorizIcon from '@material-ui/icons/MoreHoriz'; */

import '../Share/Share.css';

import more from '../Share/more.png';


class Foo extends React.Component {

  state = { showing: false };

  render() {
      const { showing } = this.state;
      return (
          <div className='buttonPlusHide'>
              <button style={{border: 'none', marginLeft: '-6px', outline: 'none'}} onClick={() => this.setState({ showing: !showing })}><img src={more} alt='more' id='showMoreSocial'></img></button>
              { showing 
                  ? <div className='allHideSocial'>         
                      <div className="Demo__some-network">
                        <WhatsappShareButton
                          url={this.shareUrl}
                          title={this.title}
                          separator=":: "
                          className="Demo__some-network__share-button"
                        >
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>                
                        <div className="Demo__some-network__share-count">&nbsp;</div>
                      </div>                     

                      <div className="Demo__some-network">
                        <TelegramShareButton
                          url={this.shareUrl}
                          title={this.title}
                          className="Demo__some-network__share-button"
                        >
                        <TelegramIcon size={32} round />
                        </TelegramShareButton>              
                        <div className="Demo__some-network__share-count">&nbsp;</div>
                      </div>

                      <div className="Demo__some-network">
                      <EmailShareButton
                        url={this.shareUrl}
                        subject={this.title}
                        body="body"
                        className="Demo__some-network__share-button"
                      >
                        <EmailIcon size={32} round />
                      </EmailShareButton>
                    </div>
                  </div>

                  : null
              }
          </div>  
      )
  }
}


class Share extends Component {
  render() {
    const shareUrl = 'http://github.com';
    const title = 'GitHub';

    return (
      <div className="mediaContainer">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>          
        </div>

        
        <div className="Demo__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>     
        
        <Foo className="Demo__some-network__share-button"/>
      </div>
    );
  }
}

export default Share;

