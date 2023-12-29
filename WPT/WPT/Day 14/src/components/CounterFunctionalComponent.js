import { useEffect, useState } from "react";
const CounterFunctionalComponent=(props)=>{
    //it returns a array of 2 values, initial value of count,
    //and a reference to setter function
    const [count,setcount]=useState(0);

    const increment=()=>{
        //to change the value of count always use setcount function
        //defined in useState
        setcount(count+1)
        
    }
    const decrement=()=>{
        //to change the value of count always use setcount function
        //defined in useState
        let cnt=count>0?count-1:0;
        setcount(cnt);
        //console.log("count"+count)
        
    }
    //the function inside useEffect will be called every time when the 
    //count value changes
    useEffect(()=>{
        console.log("count: "+count);

    },[count])
    return(
        <div>
            <h1>You clicked {count} times</h1>
            <button className="btn btn-success" type="button" name="btn" id="btn" onClick={increment}>increment</button>
            <button type="button" name="btn" id="btn" onClick={decrement}>decrement</button>
        </div>
    )

}
export default CounterFunctionalComponent;