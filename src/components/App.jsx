import React from 'react';
import "./app.less"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./main/Main.jsx";

const App = () => {
    /*const dispatch = useDispatch();
    const count = useSelector(state => state.repos.count);*/


    return (
        <BrowserRouter>
            <div className="container">
                {/*<Routes>
                    <Route path='/' component={Main}/>
                </Routes>*/}
                <Main/>
            </div>
        </BrowserRouter>
    );
};

export default App;