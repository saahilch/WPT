var blogs=[{id:1,contents:"blog1 contents"},
{id:2,contents:"blog2 contents"},
{id:3,contents:"blog3 contents"}]
//problem in callback function is nesting of the callback function is issue
//hence we use promise object
function getblogs(){
    setTimeout(()=>{
        console.log("in get blog");
         var str="<ul>";
           for(var ob of blogs){
              str+=`<li>${ob.id}----${ob.contents}</li>`
           }
         str+="</ul>"
         document.getElementById("mydiv").innerHTML=str;
        function createblog(blog,f1){
    setTimeout(()=>{
        console.log("in createblog")
        blogs.push(blog);
        console.log(blogs);
        f1();
    },2000);

}
    } ,1000)
}



console.log("before create blog")
createblog({id:4,contents:'blog4 contents'},getblogs);
//getblogs();
console.log("after getblog")