import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/authContext"
import { MemoryRouter } from "react-router-dom"
import { PrivateRoutes } from "../../src/router/privateRoutes"
import { MarvelPages } from "../../src/heroes/pages"

describe('Pruebas en >PrivateRoutes />', () => {

    test('Debe mostrar el children si esta autenticado ', () => {

        const authState = {
            logged: true,
            user: {
                name: 'nacho',
                id: 'ABC123',
            }
        }

        Storage.prototype.setItem = jest.fn();
        render(
            <AuthContext.Provider value={authState} >
                <MemoryRouter initialEntries={['/login']}>
                    <PrivateRoutes>
                        <MarvelPages />
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        screen.debug();
        expect(screen.getByText('Marvel Pages')).toBeTruthy();
        expect(Storage.prototype.setItem).toHaveBeenCalledWith("lastPage", "/login");

    })
})