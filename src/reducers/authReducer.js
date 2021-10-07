import { types } from '../types/types'

const { login, logout } = types

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case logout:
            return {}
    
        default:
            return state
    }

}