import { AuthReducer } from "../../../src/auth/context/authReducer"
import { Types } from "../../../src/auth/types/types"

const initialState = {
    name: 'Nacho',
    Id: 'ABC123'
}
const userLoad = {
    name: 'Ignacio Trevisan',
    Id: 'ABC124'
}




describe('Pruebas a <authReducer />', () => {

    test('Debe retornar el estado por defecto', () => {
        const action = {
            Type: 'Sin coincidencia',
            payload: userLoad,
        }
        const newState = AuthReducer(initialState, action);
        expect(newState).toEqual({ name: 'Nacho', Id: 'ABC123' }
        )
    })
    test('Debe cambiar el estado a el nuevo estado', () => {
        const action = {
            Type: Types.login,
            payload: userLoad,
        }
        const newState = AuthReducer({ logged: false }, action);
        expect(newState).toEqual({
            logged: true, user: {
                name: 'Ignacio Trevisan', Id: 'ABC124'
            }
        })
    })
    test('Debe borrar el usuario y poner el loged en false', () => {
        const estadoViejo = {
            logged: true, user: {
                name: 'Ignacio Trevisan', Id: 'ABC124'
            }
        }
        const action = {
            Type: Types.logout,
            payload: estadoViejo,
        }
        const newState = AuthReducer({}, action);
        expect(newState).toEqual({ logged: false })
    })
})