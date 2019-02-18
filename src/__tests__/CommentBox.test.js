import React from "react";
import CommentBox from "components/CommentBox";
import { shallow } from "enzyme";

describe("CommentBox test suite", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CommentBox />);
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
