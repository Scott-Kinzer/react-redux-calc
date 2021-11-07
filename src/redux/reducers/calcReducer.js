let initialState = {
    elementsCalc: []
}


const calcReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD":
            return {
                ...state,
                elementsCalc: [...state.elementsCalc, action.payload]
            }
            break;

        case "ADD_OPERATION":
            const lastEl = state.elementsCalc[state.elementsCalc.length - 1]
            if (lastEl !== action.payload && isNaN(lastEl) !== isNaN(action.payload))  {
                return {
                    ...state,
                    elementsCalc: [...state.elementsCalc, action.payload]
                }
            }

            return {
                ...state
            }
            break;

        case "DELETE_COUNTING":
            return {
                ...state,
                elementsCalc: []
            }
            break;


        default:
            return {...state}
    }
}

export default calcReducer;


export const addActionCreator = (el) => {
    return {
        type: "ADD",
        payload: el
    }

}

export const addOperationCreator = (el) => {
    return {
        type: "ADD_OPERATION",
        payload: el
    }

}

export const deleteCountingCreator = () => {
    return {
        type: "DELETE_COUNTING"
    }
}


