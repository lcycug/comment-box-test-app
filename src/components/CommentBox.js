import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  handleSubmit = event => {
    console.log("dd:" + JSON.stringify(this.props));
    const { saveComment } = this.props;
    let $textArea = document.getElementById("comment-box");
    if ($textArea.value.trim() === "") return;
    saveComment($textArea.value);
    $textArea.value = "";
    $textArea.focus();
  };
  render() {
    return (
      <div>
        <h3>Leave some commnets below:</h3>
        <textarea id="comment-box" cols="30" rows="10" />
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveComment: content => dispatch({ type: "save_comment", content })
});

export default connect(
  null,
  mapDispatchToProps
)(CommentBox);
