import React from 'react'
import { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const TabsComponent = (props) => {
    const [key, setKey] = useState('home');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Overview">
            <p>asgddfsdfsdfsdfslkdsjnglksjdfhglkdsjfnhglkjdshfgkjlhslkgjhsaldkjh</p>
        </Tab>
        <Tab eventKey="profile" title="Top Projects">
            <p>ew;oirjpaosijtloaisrjdfgdklszncm.v,mxc,.mvn .kzxhd;lsijfklsjdhfklj</p>
        </Tab>
        <Tab eventKey="contact" title="Top Works">
            <p>rjs;lgjaspogfjsadkghlaksjdfghlkasjfghlksjfngvlkmxcniuahiursahyriush</p>
        </Tab>
      </Tabs>
    );
  }
  
  export default TabsComponent