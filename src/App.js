import React, { useState } from 'react'
import Tab from './components/tabs';

function App() {
  const [tabInfo, setTabInfo] = useState([{name: "Tab 1", content: "Tab 1 content is showing here"},{name: "Tab 2", content: "Tab 2 content is showing here"}, {name: "Tab 3", content: "Tab 3 content is showing here"}]);
  const [tab, setTab] = useState(0);
  const showTabInfo = (tabIdx) => {
    setTab(tabIdx);
  }
  return (
    <div className="App" style={{display: "flex", flexDirection: "column", justifyContent: "right"}}>
      {JSON.stringify(tabInfo)}
      <div className="tabs" style={{display: "flex", justifyItems: "center"}}>
        {tabInfo.map((tab, i) =>
        <button onClick={(e) => showTabInfo(i)} key={i}>{tab.name}</button>)}
      </div>
      <Tab tabInfo={tabInfo} tabIdx={tab}/>
    </div>
  );
}

export default App;
