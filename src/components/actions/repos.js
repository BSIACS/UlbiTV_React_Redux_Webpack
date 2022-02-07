import axios from 'axios';

export const getRepos = (searchQuery) => {
    return async (dispatch) => {
        const response = axios.get(`https://api.github.com/search/repositories?q=${searchQuery}`)
    }
}