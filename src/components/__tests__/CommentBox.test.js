import React from "react";
import CommentBox from "components/CommentBox";
import Root from "Root";
import { mount } from "enzyme";

describe("CommentBox", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("has a textarea tag", () => {
    expect(wrapper.find("textarea").length).toEqual(1);
  });

  it("has a button called `Submit`", () => {
    expect(wrapper.find("button").props().children).toEqual("Submit");
  });

  it("can input text", () => {
    wrapper.find("textarea").simulate("change", { target: { value: "test" } });
    expect(wrapper.find("textarea").text()).toEqual("test");
  });

  it("can submit a comment", () => {
    wrapper.find("textarea").simulate("change", { target: { value: "test" } });
    wrapper.find("button").simulate("click");
    expect(wrapper.find("textarea").text()).toEqual(""); // empty the box
  });
});
