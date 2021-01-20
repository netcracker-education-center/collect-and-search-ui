import './App.css';
import './Main.css';
import './List.css';
import axios from 'axios';
import React from 'react';

class Issue extends React.Component {
  constructor(props) {
    super(props);
    var commentsArr = this.props.issue.comments;
    this.state = {
      comments: commentsArr
    }
    console.log(this.state.comments);
  }

  renderComments = () => {
    return (
      <ul className="list3b">
        {this.props.issue.comments.map((comment, i)=> <li key={i}>{comment.description}</li>)}
      </ul>
    )
  }

  render() {
    return (
      <fieldset>
       
          <div className="text">
            <p />{this.props.issue.issueKey}: {this.props.issue.title}
            <p />{this.props.issue.body}
            {this.renderComments()}
          </div>
        
      </fieldset>
    );
  }


}

export default Issue;
