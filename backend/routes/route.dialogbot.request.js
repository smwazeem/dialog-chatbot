const express = require('express');
const dialogflow = require('../dialogflow/dialogflow');
const data= require('../dialogflow/cred/config');
const router = express.Router();

const sessionData="123";

router.post('/',(req,res)=>{
    let inst = new dialogflow(data.project_id);
    let msg = req.body.message;
    
    if(msg){
        inst.sendTextMessageToDialogFlow(msg,sessionData).then((data)=>{
            res.status(200).json(data);
        }).catch((err)=>{
            res.status(500).json({status:500,message:err});
        });
    }else{
        res.status(500).json({status:500,message:'Message is null'});
    }

});

module.exports = router;