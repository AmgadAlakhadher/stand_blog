import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, incByOrder, increment, increment5 } from '../redux/actions/functionsAction';

export default function Counter() {
    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <Fragment>
            <div style={{position: "absolute",top: '50%',left:'50%',transform: 'translate(-50%,-50%)',textAlign: 'center'}}>
                <button onClick={() => increment(dispatch)}>increment</button>
                    <h3>{count}</h3>
                <button onClick={() => decrement(dispatch)}>decrement</button><br/>
                <button onClick={() => incByOrder(10,dispatch)}>decrement</button>
            </div>
        </Fragment>
    )
}
