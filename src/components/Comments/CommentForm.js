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
    height: 40,  
    fontFamily: 'arial',
    textTransform: 'none',
    marginLeft: '17px',
    width: '88px',
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
          <div id="buttonPostArea">
            <Button
            className={classes.root}
            id='postItButton'
            variant="contained" 
            type="submit"           
            
            >Post it!
            </Button>

          </div>
        </form>
      );
    } 
    
    handleSubmit(event) { 
      event.preventDefault();  
      let author = this.author;
      let body = this.body;
      this.props.addComment(author.value, body.value);
    }
    
  } 

  export default withStyles(styles)(CommentForm);
  