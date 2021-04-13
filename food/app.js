//创建服务器
const express=require('express');
const app=express();
const userRouter=require('./router/user')
const bodyParser=require('body-parser');//中间件解析
app.listen(8080);
app.use(express.static('./jiemian'));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/v1/users',userRouter);//路由器搭载
app.use((err,req,res,result)=>{
    res.send({code:500,msg:'服务器错误'})
})