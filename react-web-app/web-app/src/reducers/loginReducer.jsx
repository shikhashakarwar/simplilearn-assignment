
const initialState = {
    data: null,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'login sucess': {
            return {
                ...state,
                data: action.payload
            }
        }
        case 'login error': {
            return {
                ...state,
                error: action.payload.response.data
            }
        }
        default : {
            return {
                ...state
            }
        }
    }
}