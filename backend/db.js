import mongoose from 'mongoose';

function mydb(){
    const mongoose_url=process.env.REACT_APP_DATABASE_LINK;
    mongoose.connect(mongoose_url)
.then(()=>{
    console.log("connection established")
})
.catch((err)=>{
    console.log("No connection "+err.message)
})
}

export default mydb;