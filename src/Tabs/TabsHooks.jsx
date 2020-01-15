import React, { useState } from "react";
import { TabWrapper, TabContainer, TabEach, TabHeader } from "./TabStyles";

const Tabs = props => {
  const { tabs } = props;
  const [currentTab, setCurrentTab] = useState(props.activeIndex);

  const handleOnclickTab = selectedIndex => {
    setCurrentTab(selectedIndex);
  };

  const getInactiveTabs = () => {
    return props.tabs.filter((_, index) => index !== currentTab);
  };

  return (
    <TabWrapper>
      <TabHeader>
        {tabs.map((tab, index) => {
          return (
            <TabEach
              active={index === currentTab}
              key={`${index}-tab-index`}
              onClick={() => handleOnclickTab(index)}
            >
              {tab.header}
            </TabEach>
          );
        })}
      </TabHeader>
      <TabContainer>{tabs[currentTab].content}</TabContainer>
    </TabWrapper>
  );
};

export default Tabs;
