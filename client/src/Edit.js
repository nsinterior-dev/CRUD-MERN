import React, { useEffect, useState } from 'react';
import { TaskForm } from './TaskForm';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { updateTask, getTask } from './api';


export const EditList = () => {
    const match = useRouteMatch();
    const [task, setTask] = useState();

    useEffect(() => {
        const fetchTask = async () => {
            const task = await getTask(match.params.id);
            setTask(task);
        }
        fetchTask();
    }, []);

    const history = useHistory();
    const onSubmit = async (data) =>{
        await updateTask(data, match.params.id);
        history.push("/");
    };


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