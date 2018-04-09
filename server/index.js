import express from 'express';
import notFoundErr from './error/not_found';
import serverError from './error/server_error';

const PORT = process.env.PORT || 3000;

const server = express();

// temp root route
server.get('/',(req,res,next)=>{
    return res.json({message: "This is a very dull page. What is on the next page?"});
});

// catch unfound routes
server.use(notFoundErr);

// respond to errors
server.use(serverError);

server.listen(PORT, err => {
    if(err){ console.log(err); }
    else{ console.log(`API lisening on port ${PORT}`); }
});

export default server;