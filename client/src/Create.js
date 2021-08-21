import React from 'react';
import { TaskForm } from './TaskForm';
import { createTask } from './api';

export const CreateList = () => {

    const onSubmit = (data)=>{
        alert(JSON.stringify(data));
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