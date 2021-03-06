export const getTasks = () => 
    fetch("http://localhost:3001").then(res => res.json());

export const createTask = (task) => 
    fetch("http://localhost:3001/create",{
    method: "POST",
    headers: {
        'Accept' : 'application/json',
        'Content-Type':'application/json'
    },
    body: JSON.stringify(task),
});

export const getTask = (id) => 
    fetch(`http://localhost:3001/${id}`).then((res) => res.json());

export const updateTask =(task, id) =>
    fetch(`http://localhost:3001/${id}`, {
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(task),
    });