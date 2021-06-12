import express from 'express';

const app = express.Router();

export {app as routes};

app.get('/', (req, res) => {
    res.send({hello: 'world'})
})

// get all todos

app.get("/todos", );

//get a todo

app.get("/todos/:id", )

//create a todo

app.post("/todos", )

// update a todo

app.put("/todos/:id", )

//delete a todo

app.delete("/todos/:id", );