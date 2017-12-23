const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // IMMUTABLE 1
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1
            return newState;

        case 'DECREMENT':
            // IMMUTABLE 2
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + 10
            };
        case 'SUBSTRACT':
            return {
                ...state,
                counter: state.counter - 5
            };

        case 'STORE_RESULT':
            console.log('in')
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter
                })
            };

        case 'DELETE_RESULT':
            //  const id = 2;
            /* const newArray = [...state.results];
            newArray.splice(id,1) */
            const updatedArray = state.results.filter(r => r.id !== action.resultId)
            return {
                ...state,
                results: updatedArray
            };

        default:
            break;
    }

    return state;
};

export default reducer;