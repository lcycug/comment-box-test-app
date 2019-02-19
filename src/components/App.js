import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import * as actions from "actions";

class App extends Component {
  Header = () => {
    return (
      <ul className="nav-header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post" disabled={this.props.auth ? false : true}>
            Post
          </Link>
        </li>
        <li>{this.handleSignIn(this.props.auth)}</li>
      </ul>
    );
  };
  handleSignIn = auth => {
    if (auth) {
      return (
        <button onClick={() => this.props.switchAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.switchAuth(true)}>Sign In</button>
      );
    }
  };
  render() {
    return (
      <div className="App">
        <this.Header />
        <Route path="/post" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  actions
)(App);
