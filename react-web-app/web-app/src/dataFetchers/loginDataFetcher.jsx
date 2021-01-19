import axios from 'axios';


export const loginDataFeatcher = (data) => {

    return dispatch => {
        axios.post('http://localhost:4000/v1/login', data).then((response) => {
            dispatch({
                type: 'login sucess',
                payload: response.data
            })
        }, error => {
            dispatch({
                type: 'login error',
                payload: error
            })
        });
    }
}