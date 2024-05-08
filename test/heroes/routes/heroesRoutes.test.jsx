import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../../src/auth/context/authContext"
import { HeroesRoutes } from "../../../src/heroes/routes/heroesRoutes"

describe('Pruebas a <heroesRoutes />', () => {

    test('Debe mostrar la pagina DC Pages', () => {
        const contextValue = {

            user: {
                name: 'Nacho',
                id: 'ABC123'
            }
        }
        render(
            <MemoryRouter initialEntries={['/dc']}>
                <AuthContext.Provider value={contextValue}>
                    <HeroesRoutes />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getByText('DC Comics')).toBeTruthy();
    })

})