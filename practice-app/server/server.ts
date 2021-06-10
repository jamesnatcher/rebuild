import * as express from 'express';

const app = express();

app.listen(4201, '127.0.0.1', function() {
    console.log('Server now listening  to 4201')
})