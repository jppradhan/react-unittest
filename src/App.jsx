import React from "react";
import "./App.css";
import Tabs from "./Tabs/TabsClass";
import TabHooks from "./Tabs/TabsHooks";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>React unit test</h2>
      </header>
      <Tabs
        activeIndex={0}
        tabs={[
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
        ]}
      />
      <TabHooks
        activeIndex={0}
        tabs={[
          {
            header: "Tab 1 hooks",
            content: <div>First tab</div>
          },
          {
            header: "Tab 2 hooks",
            content: <div>Second tab</div>
          },
          {
            header: "Tab 3 hooks",
            content: <div>Third tab</div>
          },
          {
            header: "Tab 4 hooks",
            content: <div>Last tab</div>
          }
        ]}
      />
    </div>
  );
}

export default App;
