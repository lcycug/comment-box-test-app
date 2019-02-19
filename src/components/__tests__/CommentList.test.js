import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import Root from "Root";
import { mount } from "enzyme";

describe("CommentList", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Root initialState={{ comments: ["test1", "test2"] }}>
        <CommentList />
      </Root>
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("can show some comments", () => {
    expect(wrapper.find(CommentList).find("li").length).toEqual(2);
  });
});
