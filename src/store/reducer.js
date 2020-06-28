const initialState = {
    username: '',
    gpa: 0,
    isAuthenticated: false,
    jwt: null,
    preRegistered: []
};

const reducer = (state = initialState, action) => {

    if(action.type === 'LOAD_BEARER'){
        return {
            ...state,
            jwt: action.bearer,
            isAuthenticated: true
        }
    }

    if(action.type === 'LOAD_CLASS'){
        let list = [...state.preRegistered];
        if(list.includes(action.class)){
            return {
                ...state
            }
        }
        return {
            ...state,
            preRegistered: [...state.preRegistered, action.class + " at " + action.time + " on " + action.day]
        }
    }

    return state;
};

export default reducer;
