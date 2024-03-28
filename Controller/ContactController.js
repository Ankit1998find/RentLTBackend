const Contact=require('../Model/ContactModel');

exports.ContactController=async(req,res)=>{
    try{
        const {name,email,phone,message}=req.body;
        const Messages=new Contact({name,email,phone,message}); // Use Contact model here
        await Messages.save();
        res.status(201).send('Data saved successfully');
    }catch(err){
        res.status(400).send(err.message);
    }
};
