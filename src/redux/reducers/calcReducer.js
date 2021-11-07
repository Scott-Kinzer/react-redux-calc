
let initialState = {
    elementsCalc: []
}


const calcReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD":

            if (state.elementsCalc.length < 18 &&
                typeof Number(state.elementsCalc[state.elementsCalc.length - 1]) === typeof Number(action.payload)) {
                return {
                    ...state,
                    elementsCalc: [...state.elementsCalc, action.payload]
                }
            }

            return {
                ...state
            }

            break;

        case "ADD_OPERATION":
            const lastEl = state.elementsCalc[state.elementsCalc.length - 1]
            if (lastEl !== action.payload && isNaN(lastEl) !== isNaN(action.payload) &&  state.elementsCalc.length < 17)  {
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

        case "CALCULATE":

            if (state.elementsCalc.length > 2) {
                let value = eval(state.elementsCalc.join(""));

                return {
                    ...state,
                    elementsCalc: [value]
                }
            }

            return  {
                ...state
            }




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


export const CalculateActionCreator = () => {
    return {
        type: "CALCULATE"
    }
}



