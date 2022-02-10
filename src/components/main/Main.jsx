import React, {useEffect} from 'react';
import './main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo.jsx";

const Main = () => {
    const dispatch = useDispatch();

    const repos = useSelector(state => state.repos.items)
    console.log(repos)
    useEffect(() => {
        dispatch(getRepos())
    }, [])

    return (
        <div>
            {
                repos.map((repo) => {
                     return <Repo repo={repo} key={repo.id}/>
                })
            }
        </div>
    );
};

export default Main;