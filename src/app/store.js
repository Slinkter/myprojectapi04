/**
 * @file Configuración del store de Redux para la aplicación.
 * @author Slinkter
 */

import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '@/features/users/usersSlice';

/**
 * El store de Redux.
 * Combina todos los reducers de la aplicación.
 * @type {import('@reduxjs/toolkit').EnhancedStore}
 */
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
