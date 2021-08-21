import React, { useEffect, useState } from 'react';
import { TaskForm } from './TaskForm';

export const EditList = () => {
    const [task, setTask] = useState();

    useEffect(() => {
        setTask({
            text: "foo"
        })
    }, [])

    const onSubmit = (data) =>{
        alert(JSON.stringify(data));
    }


    return task ? (
        <div className="container">
            <div className="mt-3">
                <h3>Edit Task</h3>
                <TaskForm task={task} onSubmit={onSubmit} />
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    )
}