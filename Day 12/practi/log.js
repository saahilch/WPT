// declaring array & assign values to it 
arr=[{name:"user1",password:"user1"},{name:"user2",password:"user2"}];
// validtaeing here password &  user name & find it on array
exports.validate=(uname,pass)=>{
    var ob=arr.find(a=>a.name===uname && a.password===pass)
    console.log("object:",ob)
    // here we get condition array object is not equals / undefined then returns true or return 0
    if(ob!==undefined)
    {
        return ob;

    }else{
        return null;
    }
    


}