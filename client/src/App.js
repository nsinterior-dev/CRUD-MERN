// import stuff to call some stuff
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Col, Row, Form} from 'react-bootstrap';
import Modal from 'react-modal';
import { AiFillEdit } from "react-icons/ai";

import './App.css';

Modal.setAppElement('#root');
function App() {
  const [taskName, setTaskName] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

 
 
 

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
                  <div key={key}>
                    <Row>
                      <Col lg={12} className="todoList">
                        <p>{val.taskName}</p> <button onClick={()=>setModalIsOpen(true)} className="edit"><AiFillEdit /></button>
                      </Col>
                    </Row>
                  </div>
                );
              })}
         
        </Container >

          <Modal isOpen={modalIsOpen} 
                 onRequestClose={()=>setModalIsOpen(false)
          }>
            <div className="modal-header">
            <h2>Edit Task</h2>
            <button onClick={() => setModalIsOpen(false)}>&times;</button>
            </div>
            
                <Form>
                  <input type="text" className="taskEdit" placeholder="Edit the task..."/>
                  <button  >Delete</button>
                  <button >Save</button>

                </Form>
          
          
          </Modal>



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
