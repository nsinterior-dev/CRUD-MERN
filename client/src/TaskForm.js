import React  from 'react';
import { useForm } from 'react-hook-form';



export const TaskForm = ({task, onSubmit}) => {
    const { register, handleSubmit } = useForm({
        defaultValues: { 
            text: task ? task.text : "" ,
            description: task ? task.description : "",
        },
    });



    const submitHandler = handleSubmit((data) => {
        onSubmit(data);

    });


    return (
       
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="text">Text</label>
                        <input className="form-control" {...register('text', { required: true })} type="text" name="text" id="text" />
                   
                        <label htmlFor="description">Description</label>
                        <input className="form-control" {...register('description', { required: true })} type="text" name="description" id="description" />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mt-4">
                            Save
                        </button>
                    </div>
                </form>
           
    );
}