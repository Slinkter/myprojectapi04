/**
 * @file Custom hook para gestionar la lógica de la página de usuarios.
 * @author Slinkter
 */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUsers,
  getUsersStatus,
  getSearchTerm,
  setSearchTerm,
  selectFilteredUsers,
} from '@/features/users/usersSlice';

/**
 * Hook personalizado para encapsular la lógica de obtención y filtrado de usuarios.
 *
 * @returns {object} - Un objeto que contiene:
 * - `users`: La lista de usuarios filtrada.
 * - `status`: El estado de la carga de datos ('idle', 'loading', 'succeeded', 'failed').
 * - `searchTerm`: El término de búsqueda actual.
 * - `handleSearch`: Función para manejar los cambios en el input de búsqueda.
 */
export const useUsers = () => {
  // Selecciona datos del store de Redux utilizando selectores memoizados.
  const users = useSelector(selectFilteredUsers);
  const status = useSelector(getUsersStatus);
  const searchTerm = useSelector(getSearchTerm);
  //
  const dispatch = useDispatch();

  // Dispara la carga inicial de usuarios si no se han cargado todavía.
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  /**
   * Maneja el cambio en el input de búsqueda, despachando la acción para actualizar el store.
   * @param {React.ChangeEvent<HTMLInputElement>} e - El evento de cambio del input.
   */
  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  // Devuelve el estado y las funciones necesarias para la UI.
  return {
    users,
    status,
    searchTerm,
    handleSearch,
  };
};
