import React, { Component } from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

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

export default App;
