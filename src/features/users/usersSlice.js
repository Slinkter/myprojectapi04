import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { getUsers } from '@/services/users.service';

/**
 * @file Slice de Redux para gestionar el estado de los usuarios.
 * @author Slinkter
 */

const initialState = {
  users: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  searchTerm: '', // Nuevo estado para el término de búsqueda
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    /**
     * Establece el término de búsqueda para filtrar usuarios.
     * @param {object} state - El estado actual del slice.
     * @param {object} action - La acción con el término de búsqueda en el payload.
     */
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

/**
 * Thunk asíncrono para obtener los usuarios desde el servicio.
 */
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return await getUsers();
});

// Selectores
const selectUsers = (state) => state.users.users;
const selectSearchTerm = (state) => state.users.searchTerm;

/**
 * Selector memoizado que filtra los usuarios basándose en el término de búsqueda.
 * Utiliza `createSelector` para evitar recálculos si el estado no ha cambiado.
 */
export const selectFilteredUsers = createSelector(
  [selectUsers, selectSearchTerm],
  (users, searchTerm) => {
    if (!searchTerm) {
      return users;
    }
    return users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
);

export const { setSearchTerm } = usersSlice.actions;

/**
 * Selector para obtener el estado de la petición de usuarios.
 * @param {object} state - El estado global de Redux.
 * @returns {('idle'|'loading'|'succeeded'|'failed')} El estado actual de la petición.
 */
export const getUsersStatus = (state) => state.users.status;

/**
 * Selector para obtener el mensaje de error si la petición falló.
 * @param {object} state - El estado global de Redux.
 * @returns {?string} El mensaje de error, o null si no hay error.
 */
export const getUsersError = (state) => state.users.error;

/**
 * Selector para obtener el término de búsqueda actual.
 * @param {object} state - El estado global de Redux.
 * @returns {string} El término de búsqueda.
 */
export const getSearchTerm = (state) => state.users.searchTerm;

export default usersSlice.reducer;
