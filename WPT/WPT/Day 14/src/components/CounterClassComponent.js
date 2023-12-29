//defaut exports are always out side {}, otherwise add in {}
import React,{Component} from 'react';
class CounterClasscomponent extends React.Component{
    constructor(props){
        console.log("in constructor")
        super(props);
        this.state={
            count:0
        }
        //this.incrementcnt=this.incrementcnt.bind(this);
    }
    decrementcnt=()=>{
        this.setState({...this.state,count:this.state.count>0?this.state.count-1:0},()=>{
            console.log(this.state.count);
         });
    }
///add a button and a click event on the button to initalize the count to 
//property initialval

    incrementcnt=()=>{
        //to change the state always use setState function
        //state cannot be overwrriten , 
        //but its copy will be created and then modified
        //setState is asynchronou function, hence to see the changes 
        //the codeeshould be added in callback function
         this.setState({...this.state,count:this.state.count+1},()=>{
            console.log(this.state.count);
         });
         
    }
    render(){
        console.log("in render function")
        return(
            <div>
               {this.state.count>0?<h2>You clicked {this.state.count} times</h2>:""}
               <button type="button" name="btn" id="btn" onClick={this.incrementcnt}>Increament</button>
               <button type="button" name="btn" id="btn" onClick={this.decrementcnt}>decreament</button>
            </div>
        )
    }

}
export default CounterClasscomponent;