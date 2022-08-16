import mongoose from 'mongoose';

const Connection = (username,password)=>{
     mongoose.connect(`mongodb+srv://${username}:${password}@rankings.uz0my6z.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Successfully connected")}).catch((err)=>{console.log(err)}); 
}


export default Connection; 