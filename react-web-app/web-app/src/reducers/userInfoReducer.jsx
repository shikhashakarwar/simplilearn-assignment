
const initialState = {
    data: null,
    error: null
}

export const userInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'userInfo sucess': {
            return {
                ...state,
                data: action.payload
            }
        }
        case 'userInfo error': {
            return {
                ...state,
                error: action.payload
            }
        }
        default : {
            return {
                ...state
            }
        }
    }
}