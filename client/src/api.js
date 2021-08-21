export const getTasks = () => 
    fetch("http://localhost:3001").then(res => res.json());

export const createTask = (task) => 
    fetch("http://localhost:/create",{
    method: "POST",
    headers: {
        Accept : 'application/json',
        'Content-Type':'application/json'
    },
    body: JSON.stringify(task),
});