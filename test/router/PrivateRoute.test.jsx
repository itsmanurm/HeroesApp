import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas en PrivateRoute', () => { 
    
    test('debe mostrar el children si no está autenticado', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'manu'
            }
        };
        
        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={[ '/search?q=batman' ]}>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
         )
        expect( screen.getAllByText( 'Ruta Privada' ) ).toBeTruthy();

        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');

        
    
        });

 })