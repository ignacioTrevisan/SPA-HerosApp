import React, { useReducer } from 'react'
import { AuthContext } from './authContext'
import { AuthReducer } from './authReducer'
import { Types } from '../types/types'



const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user
    }
}
export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(AuthReducer, {}, init)

    const login = (name = '') => {

        const action = {
            Type: Types.login,
            payload: {
                name: name,
                id: 'ABC123'
            }

        }

        localStorage.setItem('user', JSON.stringify({ name: name, id: 'ABC123' }))
        dispatch(action);
    }
    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            Type: Types.logout
        }
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout,

        }}>
            {children}
        </AuthContext.Provider>
    )
}
