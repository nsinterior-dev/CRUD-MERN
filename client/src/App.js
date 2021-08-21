// import stuff to call some stuff
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import { AiFillEdit } from "react-icons/ai";
import './App.css';



function App() {
  const [taskName, setTaskName] = useState("");
  const [todoList, setTodoList] = useState([]);


  useEffect(()=>{
    axios.get("http://localhost:4000/read").then((response)=>{
      setTodoList(response.data);
    });
  }, []);

  const addToList = () =>{
    axios.post("http://localhost:4000/insert", {
      taskName : taskName,
    });
  };

  return (
    <div className="App">
      <Container className="wrapper">
         <Row>
            <Col lg={12} className="header">
              <h1>To Do List</h1>
            </Col>
          </Row>
        <Container className="todoListContainer">
          {todoList.map((val, key) => {
            return (
              <Row key={key}>
                <Col lg={12} className="todoList">
                  <p>{val.taskName}</p> <button className="edit"><AiFillEdit /></button>
                </Col>
              </Row>
            );
          })}
          
        </Container >
        <Form className="form-control">
          <input type="text" className="taskCreate" placeholder="Create a task..." 
          onChange={(event)=>{setTaskName(event.target.value)}} />
          <button className="addTask" onClick={addToList}>+</button>
        </Form>
        
      </Container>
    </div>
  );
}

export default App;
