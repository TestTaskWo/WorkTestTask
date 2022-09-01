import { useState } from "react";
import { TabsBlock, Tab } from "./styled";

const Tabs = ({ tabsNames, callback }) => {
  const [toggledTab, setToggledTab] = useState(0);
  return (
    <TabsBlock>
      {tabsNames.map((tab, index) => (
        <Tab
          key={tab}
          active={index === toggledTab}
          onClick={() => {
            setToggledTab(index);
            callback(index);
          }}
        >
          {tab}
        </Tab>
      ))}
    </TabsBlock>
  );
};

export default Tabs;
