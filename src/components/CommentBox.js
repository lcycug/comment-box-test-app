import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.props);
    const { saveComment } = this.props;
    let $textArea = document.getElementById("comment-box");
    console.log($textArea.value);
    if ($textArea.value.trim() === "") return;
    saveComment($textArea.value);
    $textArea.value = "";
    $textArea.focus();
  };
  render() {
    return (
      <form>
        <h3>Leave some commnets below:</h3>
        <textarea id="comment-box" cols="30" rows="10" />
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   saveComment: content => dispatch({ type: "save_comment", content })
// });

export default connect(
  null,
  actions
)(CommentBox);
