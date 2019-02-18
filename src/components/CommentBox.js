import React, { Component } from "react";
import { connect } from "react-redux";

class CommentBox extends Component {
  handleSubmit = event => {
    const { addComment } = this.props;
    event.preventDefault();
    addComment(document.getElementById("comments").value);
    document.getElementById("comments").value = "";
    document.getElementById("comments").focus();
  };
  render() {
    return (
      <div>
        <h3>Leave some commnets below:</h3>
        <textarea name="comments" id="comments" cols="30" rows="10" />
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: content => dispatch({ type: "ADD", content })
});

export default connect(
  null,
  mapDispatchToProps
)(CommentBox);
