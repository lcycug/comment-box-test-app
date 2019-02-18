import React from "react";
import App from "components/App";
import CommentBox from "components/CommentBox";
import { shallow } from "enzyme";

describe("App test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("has CommentBox", () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
  });
});
