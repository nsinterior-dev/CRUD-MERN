// import stuff to call some stuff
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiFillEdit } from "react-icons/ai";
import './App.css';



function App() {
  const [taskName, setTaskName] = useState("");



  return (
    
    <div className="App">
      <Container>
          <Row>
            <Col lg={12} className="header">
              <h1>To Do List</h1>
            </Col>
            <Col lg={12} className="todoList">
            <p>Task 1</p> <button className="edit"><AiFillEdit /></button>
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
