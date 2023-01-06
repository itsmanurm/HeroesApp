import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => { 

        const actionLogOut = {
            type: types.logout,
        };

        const actionLogIn = {
            type: types.login,
            payload: {
            id: 'ABC',
            name: 'Manuel'
            }
        }

    test('debe de retornar el estado por defecto', () => { 
        
        const state = authReducer( { logged: false }, {} );
        expect( state ).toEqual( { logged: false } );
     });

     test('debe de retornar el estado por defecto', () => { 

        const state = authReducer( { logged: false }, actionLogIn );
        expect(state).toEqual({ logged: true, user: actionLogIn.payload});

     });

     test('debe de retornar el estado por defecto', () => { 

        const state = authReducer( { logged: false }, actionLogIn );
        const state2 = authReducer( state, actionLogOut );
        expect(state2).toEqual({ logged: false });

     });


 })