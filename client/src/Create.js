import React from 'react';
import { TaskForm } from './TaskForm';
import { createTask } from './api';
import { useHistory } from 'react-router-dom';


export const CreateList = () => {
    const history = useHistory();

    const onSubmit = async (data)=>{
     await createTask(data);
     history.push("/");
    };

    

    return (
            <div className="container">
                <div className="mt-3">
                    <h3>Create Task</h3>
                    <TaskForm  onSubmit={onSubmit} />
                </div>
            </div>
        
    );
}