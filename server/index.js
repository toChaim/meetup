import express from 'express';
import notFoundErr from './error/not_found';

const PORT = process.env.PORT || 3000;

const api = express();

// temp root route
api.get('/',(req,res,next)=>{
    return res.json({message: "This is a very dull page. What is on the next page?"});
});

// catch unfound routes
api.use(notFoundErr);

api.listen(PORT, err => {
    if(err){ console.log(err); }
    else{ console.log(`API lisening on port ${PORT}`); }
});