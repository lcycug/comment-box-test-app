import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

const mapStateToProps = state => {
  return { comments: state.comments };
};

class CommentList extends React.Component {
  handleFetch = event => {
    const { fetchComments } = this.props;
    fetchComments();
  };
  render() {
    const { comments } = this.props;
    return (
      <>
        <h3>Comments List</h3>
        <button onClick={this.handleFetch}>Fetch Comments</button>
        <ul>
          {comments.map((comment, i) => (
            <li key={i}>{comment}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(CommentList);
