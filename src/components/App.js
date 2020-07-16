
import React from 'react';

import { Navbar } from "react-bootstrap";

//import images
import icon from '../images/home.svg';

function App(){
    return(
    <Navbar bg="dark">
     <Navbar.Brand href="/">
       <img
         src={icon}
         width="40"
         height="30"
         className="d-inline-block align-top"
         alt="home logo"
       />
     </Navbar.Brand>
    </Navbar>
  )
  }
export default App;
