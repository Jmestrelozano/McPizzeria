import { types } from '../types/type';

const initialState = {
  inicioSesion: {
    usuario: 'jorge',
    contraseña: '12345',
    login: false,
  },
  validaciones: {
    mensajes: '',
  },
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      console.log(action, state, 'jjj');

      const { usuario, contraseña } = action.payload;
      if (state.inicioSesion.usuario === usuario && state.inicioSesion.contraseña === contraseña) {
        return {
          ...state,
          inicioSesion: {
            usuario: action.payload.usuario,
            contraseña: action.payload.contraseña,
            login: true,
          },
        };
      }

      return state;

    case types.loggout:
      return {
        ...state,
        inicioSesion: {
          usuario: action.payload.usuario,
          contraseña: action.payload.contraseña,
          login: action.payload.login,
        },
      };

    case types.messages:
      return {
        ...state,
        validaciones: {
          mensajes: action.payload.mensaje,
        },
      };

    default:
      return state;
  }
};

console.log(initialState, 'hola');
