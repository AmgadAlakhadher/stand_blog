import { DECREMENT, INCREMENT, INCREMENT5,INC_BY_ORDER } from "./types"

export const increment = async (dispatch) =>{
    return dispatch({type: INCREMENT})
}
export const decrement = async(dispatch) =>{
    return dispatch({type: DECREMENT})
}
export const increment5 = async(val,dispatch) =>{
    return dispatch({type: INCREMENT5,value: val})
}
export const incByOrder = async(num,dispatch) =>{
    return dispatch({type: INC_BY_ORDER,num: num})
}