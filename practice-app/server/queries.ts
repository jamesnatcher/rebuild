import { error } from 'console';
import { Request, Response } from 'express';
import Pool from "pg";

const pool = new Pool.Pool({
    user: "postgres",
    host: "localhost",
    database: "skimmitdatabase",
    password: "postgres",
    port: 5432,
    connectionTimeoutMillis: 20000
});

//"SELECT * FROM todo"

export const getPosts = (req: Request, res: Response) => {
    pool.query("SELECT * FROM posts").then(results => {console.log("WORKING....");
    res.status(200).json(results.rows);
        }
    );
};

//get a todo

export const getOnePost = (req: Request, res: Response) => {
    const {id} = req.params;
    pool.query(
        "SELECT * FROM posts WHERE post_id = ($1)",
        [id],
        (error, results) => {
            if (error){
                throw error;
            }
            res.status(200).json(results.rows);
        }
    );
};


//create a todo

export const createPost = (req: Request, res: Response) => {
    const { title, body, image_url, likes, dislikes, commentscount} = req.body
    if (image_url === undefined){
        pool.query(
            "INSERT INTO posts (title, body, image_url, likes, dislikes, commentscount) VALUES (($1), ($2), 'none', 0, 0, 0) RETURNING *",
            [title, body],
            (error, results) => {
                if (error){
                    throw error;
                }
                res.status(200).json(results.rows);
            }
        );
    } else {
        pool.query(
            "INSERT INTO posts (title, body, image_url, likes, dislikes, commentscount) VALUES (($1), ($2), ($3), 0, 0, 0) RETURNING *",
            [title, body, image_url],
            (error, results) => {
                if (error){
                    throw error;
                }
                res.status(200).json(results.rows);
            }
        );
    }
};

// update a todo
export const updatePost = (req: Request, res: Response) => {
//app.put("/todos/:id", async (req, res) => {
    const {id} = req.params; //WHERE
    const {description} = req.body; //SET
    pool.query(
        "UPDATE posts SET body = ($1) WHERE post_id = ($2)",
        [description, id],
        (error) => {
            if (error){
                throw error;
            }
        }
    );
};

export const voteUpPost = (req: Request, res: Response) => {
    //app.put("/todos/:id", async (req, res) => {
        const {id} = req.params; //WHERE
        let { post_id, likes } = req.body; //SET
        let newlikes = likes += 1;
        pool.query(
            "UPDATE posts SET likes = ($1) WHERE post_id = ($2)",
            [newlikes, post_id],
            (error) => {
                if (error){
                    throw error;
                }
            }
        );
    };

export const voteDownPost = (req: Request, res: Response) => {
    //app.put("/todos/:id", async (req, res) => {
        const {id} = req.params; //WHERE
        let { post_id, dislikes } = req.body;//SET
        let newdislikes = dislikes += 1;
        pool.query(
            "UPDATE posts SET dislikes = ($1) WHERE post_id = ($2)",
            [newdislikes, post_id],
            (error) => {
                if (error){
                    throw error;
                }
            }
        );
    };

//delete a todo

export const deletePost = (req: Request, res: Response) => {
//app.delete("/todos/:id", async (req, res) => {
    const {id} = req.params;
    pool.query(
        "DELETE FROM posts WHERE post_id = $1", 
        [id],
        (error) => {
            if (error){
                throw error;
            }
        }
    );
};
