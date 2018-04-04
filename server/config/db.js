import mongoose from 'mongoose';

// production or development use default
export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/meetupDB');
    mongoose.connection()
        .once('open', ()=> { console.log('Mongodb running'); })
        .on('error', err => { console.error(err); } );
}
const DATA = {};
const MOCK_MONGODB = {    
    find(obj){
        return DATA;
    }
}
export { MOCK_MONGODB }