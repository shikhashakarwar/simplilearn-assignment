import axios from 'axios';


export const signupDataFeatcher = (data) => {

    return dispatch => {
        axios.post('http://localhost:4000/v1/signup', data).then((response) => {
            dispatch({
                type: 'signup sucess',
                payload: response.data
            })
        }, error => {
            dispatch({
                type: 'signup error',
                payload: error
            })
        });
    }
}