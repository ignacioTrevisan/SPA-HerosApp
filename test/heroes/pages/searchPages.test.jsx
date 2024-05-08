import { fireEvent, getByLabelText, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { SearchPage } from "../../../src/heroes/pages"


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));



describe('Pruebas a <SearchPages />', () => {
    test('Debe mostrar a batman ', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
        const hero = screen.getByLabelText('buscarHero');
        expect(hero.innerHTML).toContain('Batman');
    })
    test('Debe llamar el navigate a la pantalla nueva al apretar el boton', () => {
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        )
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: 'superman' } })
        const sub = screen.getByLabelText('formulario');
        fireEvent.submit(sub);
        expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman');
        // screen.debug();
    })
    test('debe mostrar un error si no se encuentra el heroe ', () => {
        render(
            <MemoryRouter initialEntries={['search?q=sup123']}>
                <SearchPage />
            </MemoryRouter>
        )
        const divs = screen.getByLabelText('notFoundAlert');
        expect(divs.style.display).not.toBe('none');
        screen.debug();
    })
})