import express from 'express';
import * as queries from "./queries";

const app = express.Router();

export {app as routes};

app.get('/', (req, res) => {
    res.send({hello: 'world'})
})

// get all todos

app.get("/posts", queries.getPosts);

//get a todo

app.get("/posts/:id", queries.getOnePost)

//create a todo

app.post("/posts", queries.createPost)

// update a todo

app.patch("/posts/:id", queries.updatePost)

app.patch("/posts/voteup/:id", queries.voteUpPost)

app.patch("/posts/votedown/:id", queries.voteDownPost)


//delete a todo

app.delete("/posts/:id", queries.deletePost);