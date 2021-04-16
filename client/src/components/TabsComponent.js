import React from 'react'
import { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TopWorks from './works/TopWorks'
import TopProjects from './projects/TopProjects'

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
          <TopProjects project={props.project}/>
        </Tab>
        <Tab eventKey="contact" title="Top Works">
          <TopWorks work={props.work}/>
        </Tab>
      </Tabs>
    );
  }
  
  export default TabsComponent