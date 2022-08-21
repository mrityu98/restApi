import mongoose from 'mongoose';

//connect to the database
    mongoose.connect("mongodb+srv://user:green@rankings.uz0my6z.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Successfully connected")}).catch((err)=>{console.log(err)}); 

