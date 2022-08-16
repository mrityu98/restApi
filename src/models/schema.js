import mongoose from 'mongoose';


const Schema=new mongoose.Schema({
    Rank:{
        type:Number,
        unique:true
    },
    name:String,
    population2022:String
});

const Population = new mongoose.model('Population',Schema);

export default Population;