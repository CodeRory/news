import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




const styles = {
  root: {
    background: '#3949ab',
    border: 0,
    borderRadius: 3,
    boxShadow: '0px 2px 26px -7px rgba(0,0,0,0.75)',
    color: 'white',
    height: 48,  
    fontFamily: 'arial',
    textTransform: 'none',
    
    
  },
};



class CommentForm extends React.Component {
    render() {
      const { classes } = this.props;
      return (
        
        <form className="" onSubmit={this.handleSubmit.bind(this)}>
          <div className="comment-form-fields">
            <input id="yourname" placeholder="📝Your name" required ref={(input) => this.author = input}></input><br />
            <textarea id='textarea' placeholder="🚩Your comment" rows="4" required ref={(textarea) => this.body = textarea}></textarea>
          </div>
          <div className="">
            <Button
            className={classes.root}
            id='postItButton'
            variant="contained" 
            type="submit"            
            /* style={{display:'none'}} */
            >Post it!
            </Button>

          </div>
        </form>
      );
    } // end render
    
    handleSubmit(event) { 
      event.preventDefault();   // prevents page from reloading on submit
      let author = this.author;
      let body = this.body;
      this.props.addComment(author.value, body.value);
    }
    
  } // end CommentForm component

  export default withStyles(styles)(CommentForm);
  