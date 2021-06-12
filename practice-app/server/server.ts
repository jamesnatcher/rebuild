import express from "express";
import { routes }  from './routes';

const app = express();


app.use((req, res, next) => {
    /*const allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }*/
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:4201');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if('OPTIONS' == req.method){
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
  });

app.use(express.json());
app.use('/', routes);

app.listen(4201, '127.0.0.1', function() {
    console.log('Server now listening  to 4201')
})

