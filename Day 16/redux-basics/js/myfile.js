//action creators
const new_booking=(name,amount)=>{
    return(
        {
            type:"newbooking",
            payload:{
                name,amount
            }
        }
    )
    
}
const cancel_booking=(name,amount)=>{
    return(
        {
            type:"cancelbooking",
            payload:{
                name,amount
            }
        }
    )
    
}
//write reducers
const manageReservation=(oldreservation=[],action)=>{
    switch(action.type){
        case "newbooking":
            return [...oldreservation,{...action.payload}];
        case "cancelbooking":
            return oldreservation.filter(ob=>ob.name!=action.payload.name)
        default:
            return oldreservation;
    }

}
const manageCancellation=(oldcancelation=[],action)=>{
    switch(action.type){
        case "cancelbooking":
            return [...oldcancelation,{...action.payload}];
        default:
            return oldcancelation;
    }

}

const manageamount=(oldamount=2000,action)=>{
    switch(action.type){
        case "newbooking":
            return oldamount+action.payload.amount
        case "cancelbooking":
            return oldamount-action.payload.amount
        default:
            return oldamount;
    }
}
//generate store to keep state
const {createStore,combineReducers}=Redux
const bookingstore=combineReducers({
    accounting:manageamount,
    reservationList:manageReservation,
    cancelationList:manageCancellation
});

const store=createStore(bookingstore)


//send action
const action=new_booking("rajan",4000)
store.dispatch(action);
console.log(store.getState())
const action1=new_booking("revati",3000)
store.dispatch(action1);
console.log(store.getState())
const action2=cancel_booking("rajan",2000)
store.dispatch(action2);
console.log(store.getState())