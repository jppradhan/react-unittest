import React, { Component } from "react";
import { TabWrapper, TabContainer, TabEach, TabHeader } from "./TabStyles";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: props.activeIndex
    };
    this.handleOnclickTab = this.handleOnclickTab.bind(this);
    this.getInactiveTabs = this.getInactiveTabs.bind(this);
  }

  handleOnclickTab(selectedIndex) {
    this.setState({
      currentTab: selectedIndex
    });
  }

  getInactiveTabs() {
    return this.props.tabs.filter(
      (_, index) => index !== this.state.currentTab
    );
  }

  render() {
    const { tabs } = this.props;
    const { currentTab } = this.state;

    return (
      <TabWrapper>
        <TabHeader>
          {tabs.map((tab, index) => {
            return (
              <TabEach
                active={index === currentTab}
                key={`${index}-tab-index`}
                onClick={() => this.handleOnclickTab(index)}
              >
                {tab.header}
              </TabEach>
            );
          })}
        </TabHeader>
        <TabContainer>{tabs[currentTab].content}</TabContainer>
      </TabWrapper>
    );
  }
}

export default Tabs;
