import React from "react";
import CommentBox from "components/CommentBox";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

describe("CommentBox test suite", () => {
  const initialState = { comments: [], dispatch: () => {} };
  let store;
  let wrapper;
  beforeEach(() => {
    store = configureStore()(initialState);
    wrapper = shallow(<CommentBox store={store} />);
    console.log("=============" + wrapper);
    console.log("=======> beforeEach CommentBox <======");
  });

  afterEach(() => {
    wrapper.unmount();
    console.log("=======> afterEach CommentBox <======");
  });

  it("has a textarea tag", () => {
    console.log(JSON.stringify(wrapper));
    // expect(wrapper.find("textarea").length).toEqual(1);
  });
});
