import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/authContext"
import { PublicRoutes } from "../../src/router/publicRoutes"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Pruebas a <PublicRoutes />', () => {


    test('Debe mostrar la ruta publica si no esta autenticado', () => {
        const authState = {
            logged: false,
        }
        render(
            <AuthContext.Provider value={authState}>
                <PublicRoutes >
                    <h1 aria-label="bueno">Hola</h1>
                </PublicRoutes>
            </AuthContext.Provider>
        )

    })
    test('Debe mostrar el navigate si esta autenticado', () => {
        const authState = {
            logged: true,
            user: {
                name: 'Nacho',
                Id: 'ABC123',
            }
        }
        render(
            <AuthContext.Provider value={authState}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoutes>
                                <h1>Rutas publicas</h1>
                            </PublicRoutes>
                        } />
                        <Route path='marvel' element={<h1>Pagina marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>

        )
        expect(screen.getByText('Pagina marvel')).toBeTruthy();
    })
})