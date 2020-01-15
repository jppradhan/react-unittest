import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("renderer", () => {
  it("component exist ", () => {
    const component = shallow(<App />);
    expect(component.exists()).toBeTruthy();
  });
});
