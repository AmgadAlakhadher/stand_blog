import { GET_USER_ID, MODIFY_PWD, MODIFY_USERNAME } from "../actions/types";




const usersReducer = (state = {id: 0,name: '',pwd: ''},action) =>{
    
    switch(action.type){
        case MODIFY_USERNAME:
            return {...state,username: state.user};
        case MODIFY_PWD:
            return {...state,id: state.user};
        case GET_USER_ID:
            return {...state,pwd: state.user+ action.value}
        default:
            return state;
    }
}
export default usersReducer;