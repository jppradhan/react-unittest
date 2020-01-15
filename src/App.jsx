import React from "react";
import "./App.css";
import Tabs from "./Tabs/TabsClass";
import TabHooks from "./Tabs/TabsHooks";
import Get from "./Get/Get";

const Image = () => {
  return (
    <div className='tab-animate'>
      <img
        src={`https://picsum.photos/768/435?t=${Math.floor(Math.random() * 4) +
          1}`}
      />
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>React unit test</h2>
      </header>
      {/* <Tabs
        activeIndex={0}
        tabs={[
          {
            header: "Tab 1",
            content: <Image />
          },
          {
            header: "Tab 2",
            content: <Image />
          },
          {
            header: "Tab 3",
            content: <Image />
          },
          {
            header: "Tab 4",
            content: <Image />
          }
        ]}
      />
      <TabHooks
        activeIndex={0}
        tabs={[
          {
            header: "Tab 1 hooks",
            content: <Image />
          },
          {
            header: "Tab 2 hooks",
            content: <Image />
          },
          {
            header: "Tab 3 hooks",
            content: <Image />
          },
          {
            header: "Tab 4 hooks",
            content: <Image />
          }
        ]}
      /> */}
      <Get url='https://api.github.com/users'>
        {d => {
          return (
            <div className='grid-image-container'>
              {d.map(_d => (
                <img src={_d.avatar_url} />
              ))}
            </div>
          );
        }}
      </Get>
    </div>
  );
}

export default App;
