import { SAVE_COMMENT } from "actions/types";
import { saveComment } from "actions";

describe("actions", () => {
  it("can save comment", () => {
    expect(saveComment("test")).toEqual({
      payload: "test",
      type: SAVE_COMMENT
    });
  });
});
