//创建路由器
const express=require('express');
const pool=require('../pool')
const r=express.Router();//创建路由器
r.post('/reg',(req,res,next)=>{
    var obj=req.body;
    console.log(obj)
    if(!obj.uname){
        res.send({code:401,msg:'用户名不能为空'});
        return;
    }
    if(!obj.upwd){
        res.send({code:402,msg:'密码不能为空'});
        return;
    }
    if(!obj.phone){
        res.send({code:404,msg:'手机号不能为空'});
        return;
    }
    pool.query('insert into xx_user set ?',[obj],(err,result)=>{
        if(err){
            next(err);
            return;
        }
        console.log(result)
        if(result.affectedRows===0){
            res.send('0');
        }
        else{
            res.send('1')
        }
    })
   
})
module.exports=r