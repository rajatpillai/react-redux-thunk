import {
    API_DATA,
} from "../actions/api";

export default function (state = {}, action) {
    switch (action.type) {
        case API_DATA:
            return { ...state, api_data: action.data };
        default:
            return state;
    }
}