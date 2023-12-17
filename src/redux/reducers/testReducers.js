import { ADD_ITEM, DELETE_ITEM } from "../epic/actionTypes";

const initialState = {
    numOfItems: 0,
};

const testReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems + 1,
            };

        case DELETE_ITEM:
            return {
                ...state,
                numOfItems: state.numOfItems - 1,
            };
        default:
            return state;
    }
};

export default testReducers;
