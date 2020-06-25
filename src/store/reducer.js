const initialState = {
    gpa: 0
};

const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        return {
            gpa: state.gpa + 1
        }
    }
    return state;
};


export default reducer;
