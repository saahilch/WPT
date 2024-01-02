var blogs=[{id:1,contents:"blog1 contents"},
{id:2,contents:"blog2 contents"},
{id:3,contents:"blog3 contents"}];

function getblogs(){
    setTimeout(()=>{
        console.log("in get blog");
         var str="<ul>";
           for(var ob of blogs){
              str+=`<li>${ob.id}----${ob.contents}</li>`
           }
         str+="</ul>"
         document.getElementById("mydiv").innerHTML=str;
        
    } ,1000)
}

function createblog(blog){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("In createblog function");
            blogs.push(blog);
            var error=true;
            if(!error){
                resolve();
            }else{
                reject("this is error in reject");
            }

        },2000)

    })
}

createblog({id:4,contents:'blog4 contents1111'})
.then(getblogs)
.catch((err)=>{console.log("in catch function",err)})


var promise4=fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
    console.log(response);
    if(response.status===200 && response.ok){
         return response.json();
    }
    throw "error occured";

}).catch((error)=>{
    console.log("error",error);
})
promise4
.then((data)=>{
    console.log(data);
    //parse the data to convert into javascript array
    //call displayTable function and apss this array to the function
    //to display data in table format.
})
.catch((error)=>{
    console.log("in promise4 catch block",error)
})