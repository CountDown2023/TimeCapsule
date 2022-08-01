import React, { useState } from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
import "./DesignSettings.css";
const DesignSettings = () => {
  let [tab, setTab] = useState(0);
  return (
    <div className="settings">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="1" title="1">
          1111
        </Tab>
        <Tab eventKey="2" title="2">
          2222
        </Tab>
        <Tab eventKey="3" title="3">
          333
        </Tab>
        <Tab eventKey="4" title="4">
          4444
        </Tab>
        <Tab eventKey="5" title="5">
          5555
        </Tab>
      </Tabs>
    </div>
  );
};

export default DesignSettings;
