import React, { Component } from "react";
import { connect } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import * as actions from "actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Comment Box</h1>
        <h2>You can leave your comments here below</h2>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
