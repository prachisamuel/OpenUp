import mongoose from "mongoose";


export const connection = async (username,password) => {
    const URL=`mongodb+srv://${username}:${password}@openup.6bciesu.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useunifiedTopology:true , useNewUrlParser:true});
        console.log('database connected successfully');
    } 
    catch(error){
        console.log('error while connecting',error.message);
    }
}

export default connection;