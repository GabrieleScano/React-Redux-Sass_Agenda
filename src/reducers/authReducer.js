import { types } from '../components/types/types'

const { LOGIN, LOGOUT } = types

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case LOGOUT:
            return {}
    
        default:
            return state
    }

}