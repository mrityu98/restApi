import express from 'express';
import Populations from '../models/schema.js';

const router = new express.Router();

router.get('/',async (req,res)=>{
    try{
        const responseObject = await Populations.find({},{'__v':false}).sort({Rank:1});
        res.send(responseObject);
        
       }
     catch(err){
     res.status(400).send(err);
     }
    
})

/* router.get('/:country',async (req,res)=>{
    try{
        let key=req.params.country.toLowerCase();
        key=key.charAt(0).toUpperCase()+key.slice(1);
        const responseObject = await Populations.find({name:key});
        res.status(201).send(responseObject);
        
       }
     catch(err){
     res.status(400).send(err);
     }
    
})*/

router.get('/:rank',async (req,res)=>{
    
    try{
        if((req.params.rank<1) || (req.params.rank>209)){
            res.status(501).send("Ranks from 1 to 209 only are currently available");
        }
        else{
        const responseObject = await Populations.find({Rank:req.params.rank});
        res.send(responseObject);
        }
    }
     catch(err){
     res.status(400).send("Type of Rank should be number");
     } 
})

router.patch('/:rank',async (req,res)=>{

    try{
        if((req.params.rank<1) || (req.params.rank>209)){
            res.status(501).send("Ranks from 1 to 209 only are currently available");
        }
        else{
        const responseObject = await Populations.findOneAndUpdate({Rank:req.params.rank},req.body,{new:true});
        res.send(responseObject);
        }
       }
     catch(err){
     res.status(500).send("Type of Rank should be number");
     }
    
})

router.delete('/:rank',async (req,res)=>{
    try{
        
        if((req.params.rank<1) || (req.params.rank>209)){
            res.status(501).send("Ranks from 1 to 209 only are currently available");
        }
        else{
        const responseObject = await Populations.findOneAndDelete({Rank:req.params.rank});
        res.send(responseObject);
        }
       }
     catch(err){
     res.status(500).send("Type of Rank should be number");
     }
    
})

router.post('/', async (req,res)=>{
    try{
        
       const Country=new Populations(req.body);
       const responseObject=await Country.save();
       console.log(responseObject);
       res.status(201).send(responseObject);
       
      }
    catch(err){
    res.status(400).send(err);
    }
})

router.get('*',(req,res)=>{
    res.status(404).send('Invalid get request');
})

 router.delete('*',(req,res)=>{
    res.status(404).send('Invalid delete request');
})

router.patch('*',(req,res)=>{
    res.status(404).send('Invalid patch request');
})

router.post('*',(req,res)=>{
    res.status(404).send('Invalid post request');
})

export default router;
