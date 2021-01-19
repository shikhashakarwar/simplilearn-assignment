
const initialState = {
    data: null,
    error: null
}

export const signupReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'signup sucess': {
            return {
                ...state,
                data: action.payload
            }
        }
        case 'signup error': {
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