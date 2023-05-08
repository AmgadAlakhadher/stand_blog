import { DECREMENT, INCREMENT, INCREMENT5,INC_BY_ORDER } from "../actions/types";

const counterReducer = (state = {count: 0},action) =>{
    
    switch(action.type){
        case INCREMENT:
            return {...state,count: state.count+1};
        case DECREMENT:
            return {...state,count: state.count-1};
        case INCREMENT5:
            return {...state,count: state.count+ action.value}
        case INC_BY_ORDER:
            return {...state,count: state.count+ action.num}
        default:
            return state;
    }
}
export default counterReducer;