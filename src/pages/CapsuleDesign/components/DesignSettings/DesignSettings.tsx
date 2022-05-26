import React, { useState } from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
import "./DesignSettings.css";
const DesignSettings = () => {
  let [tab, setTab] = useState(0);
  return (
    <div className="settings">
      <Tabs defaultActiveKey="1" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="병" title="병">
          1111
        </Tab>
        <Tab eventKey="편지지" title="편지지">
          2222
        </Tab>
        <Tab eventKey="편지지 줄" title="편지지 줄">
          333
        </Tab>
        <Tab eventKey="색상" title="색상">
          4444
        </Tab>
        <Tab eventKey="뚜껑" title="뚜껑">
          5555
        </Tab>
      </Tabs>
    </div>
  );
};

export default DesignSettings;
