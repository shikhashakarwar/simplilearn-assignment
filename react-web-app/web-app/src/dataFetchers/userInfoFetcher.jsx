import axios from 'axios';


export const userInfoDataFetcher = (userGUID) => {

    return dispatch => {
        axios.get(`http://localhost:4000/v1/user/${userGUID}`).then((response) => {
            dispatch({
                type: 'userInfo sucess',
                payload: response.data
            })
        }, error => {
            dispatch({
                type: 'userInfo error',
                payload: error
            })
        });
    }
}