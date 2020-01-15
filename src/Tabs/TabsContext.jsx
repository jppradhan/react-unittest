import React, { createContext } from "react";

const TabsContext = createContext({});

const Tabs = props => {
  return <TabsContext.Provider>{props.children}</TabsContext.Provider>;
};
