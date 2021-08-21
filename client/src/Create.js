import React from 'react';
import {useForm } from 'react-hook-form';
import {useHistory} from 'react-router-dom';

export const CreateList = () => {
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const onSubmit = handleSubmit((data)=>{
        alert(JSON.stringify(data));
        history.push("/");
    })

    

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Create List</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="text">Text</label>
                        <input className="form-control" {...register('text', { required: true })} type="text" name="text" id="text"/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mt-4">
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
   
        
        </div>
    );
}