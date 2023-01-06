import { render,  screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { AppRouter } from '../../src/router/AppRouter';


describe('Pruebas en <AppRouter />', () => { 
    
    test('debe de mostrar el login si no esta autenticado', () => { 
        
        const contextValue = {
            logged: false,
        }

        render(
           <MemoryRouter initialEntries={['/marvel']} >
             <AuthContext.Provider value={{ contextValue }}>
                <AppRouter/>
             </AuthContext.Provider>
          </MemoryRouter> 
        );
     })

 });