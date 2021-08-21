import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


export const TaskForm = ({task, onSubmit}) => {
    const { register, handleSubmit } = useForm({
        defaultValues: { text: task ? task.text : "" },
    });
    const history = useHistory();


    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
        history.push("/");
    });


    return (
       
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="text">Text</label>
                        <input className="form-control" {...register('text', { required: true })} type="text" name="text" id="text" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="text">Description</label>
                        <input className="form-control" {...register('text', { required: true })} type="text" name="text" id="text" />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mt-4">
                            Save
                        </button>
                    </div>
                </form>
           
    );
}