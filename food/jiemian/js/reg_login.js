function show(){
    var reg=/^[\w]{5,12}$/
    //var reg3=/^[\w]{11}$/;
    var u=document.getElementById('uname').value;
    var p=document.getElementById('upwd').value;
    var t=document.getElementById('tel').value;
    if(!reg.test(u)){
       un.innerHTML='用户名格式有误';
       return;
    }
    if(!reg.test(p)){
        up.innerHTML='密码格式有误';
        return;
    }
    if(!reg.test(t)){
        ut.innerHTML='手机号格式有误';
        return;
    }
    //构建一个ajax
    //1
    var xhr=new XMLHttpRequest();
    //2.绑定修改状态
    
    xhr.onreadystatechange=function(){
        //响应
       if(xhr.readyState===4 && xhr.status===200){
            var str=xhr.responseText;
            if(str==1){
                location.href='login.html';
            }
            else{
               alert('系统繁忙')
            }
        }
    }
    var obj=`http://127.0.0.1:8080/v1/users/reg`;
    //打开链接
    xhr.open('POST',obj,true);
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
    var data=`uid=null&uname=${u}&upwd=${p}&phone=${t}`;
    //发送
    xhr.send(data);
}