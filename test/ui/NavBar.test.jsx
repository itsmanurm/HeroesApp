import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";

import { AuthContext } from "../../src/auth";
import { NavBar } from "../../src/ui/components/NavBar";

const mockedUserNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUserNavigate

}))

describe('Pruebas en <NavBar />', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'Manuel Martinez',
            id: '1243'
        },
        logout: jest.fn()
    }

    beforeEach( () => jest.clearAllMocks() );

    
    test('debe de mostrar el nombre de usuario', () => { 

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/marvel']}>
                    <NavBar  />;
                    screen.debug();
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Manuel Martinez') ).toBeTruthy();
     });

     test('debe de llamar al logout y navigate cuando se hace en el boton', () => { 


        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/marvel']}>
                    <NavBar  />;
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logOutButton = screen.getByLabelText('button-logout');

        fireEvent.click( logOutButton );

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUserNavigate ).toHaveBeenCalledWith("/login", {"replace": true});
        
      });
 })