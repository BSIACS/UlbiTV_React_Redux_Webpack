import React from 'react';
import "./app.less"
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../reducers/reposReducer";

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.repos.count);

    const onBtnClickHandler = function (){
        dispatch(setCount(42));
    }

    return (
        <div>
            <h1 className="app">React is working! Hello, Mr. Doe...</h1>
            <h2>{count}</h2>
            <button onClick={ onBtnClickHandler }>Increase count</button>
        </div>
    );
};

export default App;