import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import requireAuth from "components/requireAuth";

class CommentBox extends Component {
  state = { comment: "" };
  handleSubmit = event => {
    event.preventDefault();
    const { comment } = this.state;
    if (comment.trim() === "") return;

    const { saveComment } = this.props;
    saveComment(comment);
    this.setState({ comment: "" });
  };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <form>
        <h3>Leave some comments below:</h3>
        <textarea
          id="comment-box"
          cols="30"
          rows="10"
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(requireAuth(CommentBox));
