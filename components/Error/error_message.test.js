import React from "react";
import { shallow } from "enzyme";
import ErrorMessage from "./error_message";

describe("ErrorMessage", () => {
  it("should provide an error message", () => {
    const wrapper = shallow(<ErrorMessage/>);
    expect(wrapper.html()).toEqual('<div>Invalid zipcode.</div>');
    wrapper.unmount();
  });
});
