import { fireEvent, render, screen } from "@testing-library/react"
import { Navbar } from "../../../src/ui/components/navbar"
import { AuthContext } from "../../../src/auth/context/authContext"
import { MemoryRouter, useNavigate } from 'react-router-dom'


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas a <navbar />', () => {


    // test('Debe mostrar el nombre del usuario', () => {
    //     const contextValue = {
    //         logged: true,
    //         user: {
    //             name: 'Nacho',
    //             id: 'ABC123'
    //         },

    //     }

    //     beforeEach(() => jest.clearAllMocks());
    //     render(
    //         <MemoryRouter initialEntries={['/marvel']}>
    //             <AuthContext.Provider value={contextValue}>
    //                 <Navbar />
    //             </AuthContext.Provider>
    //         </MemoryRouter>
    //     )
    //     expect(screen.getByText('Nacho')).toBeTruthy();
    // })
    test('Debe llamar el logout y navigate cuando se hace click en el boton', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Nacho',
                id: 'ABC123'
            },
            logout: jest.fn(),
        }
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        const boton = screen.getByRole('button');
        fireEvent.click(boton);
        expect(contextValue.logout).toHaveBeenCalledTimes(1);
        expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
    })
})