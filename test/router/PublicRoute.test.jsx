import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";


describe('Pruebas en <PublicRoute/>', () => { 
    
   test('debe mostrar el children si no está autenticado', () => { 

    const contextValue = {
        logged: false
    }
    
    render( 
        <AuthContext.Provider value={ contextValue }>
            <PublicRoute>
                <h1>Ruta Publica</h1>
            </PublicRoute>
        </AuthContext.Provider>
     )

        expect( screen.getAllByText( 'Ruta Publica' ) ).toBeTruthy();

    });

    test('debe de navegar si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Manuel',
                id: 'ABC3we'
            }
        }
        
        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']} >

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={ <h1>Pagina de marvel</h1> } />
                    </Routes>

                    
                </MemoryRouter>
            </AuthContext.Provider>
         );

        expect( screen.getByText( 'Pagina de marvel' ) ).toBeTruthy();

        });
    
 })