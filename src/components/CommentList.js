import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { comments: state.comments };
};

class CommentList extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <>
        <h3>Comments List</h3>
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
  null
)(CommentList);
