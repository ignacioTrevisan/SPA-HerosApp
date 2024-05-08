import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth/context/authContext"
import { AppRouter } from "../../src/router/appRouter"

describe('Pruebas a <AppRouter />', () => {
    test('Debe mostrar el login si no estoy autenticado', () => {

        const contextValue = {
            logged: false,
            user: {
                name: 'Nacho',
                id: 'ABC123'
            }
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue} >
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

    })
    test('Debe mostrar el componente <Marvel Pages /> si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Nacho',
                id: 'ABC123'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getByText('Marvel Pages')).toBeTruthy();
    })
})