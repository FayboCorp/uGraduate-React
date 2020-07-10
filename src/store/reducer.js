const initialState = {
    username: '',
    gpa: 0,
    isAuthenticated: false,
    jwt: null,
    preRegistered: [],
    registered: []
};

const reducer = (state = initialState, action) => {

    if(action.type === 'LOAD_BEARER'){
        return {
            ...state,
            jwt: action.bearer,
            isAuthenticated: true
        }
    }

    if(action.type === 'LOAD_REG'){
        return {
            ...state,
            registered: action.registered
    }
    }

    if(action.type === 'LOAD_CLASS'){
        let list = [...state.preRegistered];
        let pushedClass = [
            action.class,
            action.time,
            action.day,
            action.crn
        ];

        for(let i = 0; i<list.length; i++){
            if(list[i][0] === action.class){
                return {
                    ...state
                }
            }

        }

        return {
            ...state,
            preRegistered: [...state.preRegistered, pushedClass]
        }
    }

    return state;
};

export default reducer;
