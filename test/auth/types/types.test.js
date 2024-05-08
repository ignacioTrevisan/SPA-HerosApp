import { Types } from "../../../src/auth/types/types"

describe('Pruebas a Types.js', () => {
    test('Verificar que los string esten bien escritos', () => {
        expect(Types).toEqual({
            login: '[AUTH] Login',
            logout: '[AUTH] Logout'
        })
    })
})