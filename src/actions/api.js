import axios from 'axios';

export const API_DATA = "API_DATA";
export function API (breed) {
    return dispatch => {
       return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then((response) => {
            const result = response.data;
            dispatch({type: API_DATA, data: result});
        })
        .catch(({...error}) => {
            dispatch({type: API_DATA, data: error});
            throw(error);
        });
    }
}