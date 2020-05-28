import React from 'react';
import '../Comments/Comments.css';


import DeleteIcon from '@material-ui/icons/Delete';
import CommentForm from './CommentForm';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const styles = {
  root: {
    background: '#3949ab',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'primary',    
    fontStyle: 'white',
    fontFamily: 'arial',   
  },
};

class CommentBox extends React.Component {
    constructor() {
      super();
      
      this.state = {
        showComments: false,
        comments: [
          {id: 1, author: "Julia", body: "I really enjoy visiting this web."},
          {id: 2, author: "David", body: "It would be nice read more about foxes."},
          {id: 3, author: "Arianna", body: "I sent you a couple of pics of animals of my country."}
        ]
      };
    }
    
    render () {
      const comments = this.getComments();
      let commentNodes;
      let buttonText = 'Show Comments';
      
      if (this.state.showComments) {
        buttonText = 'Hide Comments';
        commentNodes = <div>{comments}</div>;
      }
      const { classes } = this.props;
      return(
        
        <div className="commentContainer" >
          <h2>Write your opinion about this web!</h2>
          <CommentForm addComment={this.addComment.bind(this)} />
          <Button className={classes.root} id="buttonShow" onClick={this.handleClick.bind(this)} >
            {buttonText}
          </Button>
          <h3>Comments</h3>
          <h4 className="comment-count">
            {this.getCommentsTitle(comments.length)}
          </h4>
          {commentNodes}
        </div>  
      );
    } // end render
    
    addComment(author, body) {
      const comment = {
        id: this.state.comments.length + 1,
        author,
        body
      };
      this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }
    
    handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    getComments() {    
      return this.state.comments.map((comment) => { 
        return (
          <Comment 
            author={comment.author} 
            body={comment.body} 
            key={comment.id} />
        ); 
      });
    }
    
    getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount} comments`;
      }
    }
  } // end CommentBox component
  
  
  class Comment extends React.Component {
    render () {
      return(
        <div className="comment">
          <p className="comment-header" >{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
          <div className="comment-footer">
            <a href="/#" className="comment-footer-delete" onClick={this.deleteComment}><DeleteIcon size="small"/></a>
          </div>
        </div>
      );
    }
    deleteComment(event) {
        event.preventDefault();      
      alert('You are not the host');
    }
  }
  
  
  export default withStyles(styles)(CommentBox);