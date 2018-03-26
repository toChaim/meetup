import express from 'express';
const PORT = process.env.PORT || 3000;

const api = express();

api.listen(PORT, err => {
    if(err){ console.log(err); }
    else{ console.log(`API lisening on port ${PORT}`); }
});