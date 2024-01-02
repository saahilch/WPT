import {useState} from 'react';
const NameForm=(props)=>{
    const [name,setname]=useState("xxxx");
    const [errmsg,seterrmsg]=useState("");
    const handlechange=(event)=>{
        setname(event.target.value);
    }
    const addname=()=>{
        if(name==="" || name.trim().length===0){
            //alert("name cannot be blank")
            seterrmsg("name canot be blank");
            return;
        }
        props.insertname(name);
        seterrmsg("")
        //clear the text box contents
        setname("");
      }
      const delname=()=>{
        props.deletename(name);
        setname("");
      }
      const updatename=()=>{
        var newname=prompt("Enter new name");
        props.updatedata(name,newname);
        setname("");
      }
   return(
   <div>
   <hr></hr>
   Name: {name}
    <form>
  <div class="form-group">
    <label for="name">Name : </label>
    <input type="text" name="name" class="form-control" id="name" 
        value={name}
        onChange={handlechange}
    /><span>{errmsg}</span>
    
  </div>
  
  <button type="button" class="btn btn-success" name="btn" id="btn" onClick={addname}>Add</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <button type="button" class="btn btn-danger" name="btn" id="btn" onClick={delname}>Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
  <button type="button" class="btn btn-primary" name="btn" id="btn" onClick={updatename}>update</button>
</form>
   </div>
   )
}
export default NameForm;