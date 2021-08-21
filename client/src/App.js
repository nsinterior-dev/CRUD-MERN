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
      <Container className="wrapper">
         <Row>
            <Col lg={12} className="header">
              <h1>To Do List</h1>
            </Col>
          </Row>
        <Container className="todoListContainer">
          <Row>
            <Col lg={12} className="todoList">
              <p>Task 1</p> <button className="edit"><AiFillEdit /></button>
            </Col>
            <Col lg={12} className="todoList">
              <p>Task 1</p> <button className="edit"><AiFillEdit /></button>
            </Col>
            <Col lg={12} className="todoList">
              <p>Task 1</p> <button className="edit"><AiFillEdit /></button>
            </Col>
            <Col lg={12} className="todoList">
              <p>Task 1</p> <button className="edit"><AiFillEdit /></button>
            </Col>
          </Row>
        </Container >
        <div className="formTask">
          <input type="text" className="taskCreate" placeholder="Create a task..." />
          <button className="addTask">+</button>
        </div>
        
      </Container>
    </div>
  );
}

export default App;
