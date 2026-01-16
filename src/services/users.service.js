/**
 * @file Servicio para gestionar las operaciones de los usuarios.
 * @author Slinkter
 */

import apiClient from '@/services/api';

/**
 * Obtiene la lista de usuarios desde la API.
 * @returns {Promise<Array<object>>} Una promesa que se resuelve con la lista de usuarios.
 */
export const getUsers = async () => {
  return await apiClient('users');
};
