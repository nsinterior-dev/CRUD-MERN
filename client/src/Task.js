import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


export const TaskList = () => {
    const [items, setItems] = useState([]);
    
    useEffect(()=>{
        setItems([
            {text: "foo", des: "abc", id: 0},
            { text: "bar", des: "abc", id: 1 },
            { text: "fuz", des: "abc", id: 2 },
        ])
    }, [])

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Tasks List</h3>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Text</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(task=> (
                                <tr key={task.id}>
                                    <td>
                                        {task.text}
                                    </td>
                                    <td>
                                        {task.des}
                                    </td>
                                    <td>
                                        <Link to={`/edit/${task.id}`}>Edit</Link>
                                    </td>
                                    
                                </tr>
                                
                            ))
                        }
                    </tbody>
                </table>
            </div>
        
        
        
        
        </div>
    );
}