const SET_REPOS = 'SET_REPOS';

const defaultState = {
    items: [],
    isFetching: false,
    count: 0,
}

export const reposReducer = (state = defaultState, action) => {
    switch(action.type){
        case SET_REPOS:
            return {
                ...state,
                items: action.payload.items
            };
        default:
            return state;
    }
}

export let setRepos = (payload) => {
    return {
        type: SET_REPOS,
        payload,
    };
}