import React from "react";
import { shallow } from "enzyme";
import Tabs from "./TabsHooks";
import { TabWrapper, TabContainer, TabEach, TabHeader } from "./TabStyles";

const props = {
  activeIndex: 0,
  tabs: [
    {
      header: "Tab 1",
      content: <div>First tab</div>
    },
    {
      header: "Tab 2",
      content: <div>Second tab</div>
    },
    {
      header: "Tab 3",
      content: <div>Third tab</div>
    },
    {
      header: "Tab 4",
      content: <div>Last tab</div>
    }
  ]
};

describe("Tabs", () => {
  it("renders component", () => {
    const component = shallow(<Tabs {...props} />);
    expect(component.find(TabEach).length).toEqual(props.tabs.length);
  });

  it("shows second tab on clicking tab 2", () => {
    const component = shallow(<Tabs {...props} />);
    expect(
      component
        .find(TabEach)
        .at(0)
        .props().active
    ).toBeTruthy();

    component
      .find(TabEach)
      .at(1)
      .simulate("click");

    expect(
      component
        .find(TabEach)
        .at(1)
        .props().active
    ).toBeTruthy();
    expect(
      component
        .find(TabEach)
        .at(0)
        .props().active
    ).toBeFalsy();
  });
});
