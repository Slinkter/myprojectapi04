/**
 * @file Contiene un cliente de API genérico para realizar solicitudes HTTP.
 * @author Slinkter
 */

/**
 * Realiza una solicitud fetch a la API.
 * @param {string} endpoint - El endpoint al que se debe llamar.
 * @param {object} [options] - Opciones de configuración para la solicitud fetch.
 * @returns {Promise<any>} Una promesa que se resuelve con los datos de la respuesta.
 * @throws {Error} Si la respuesta de la red no es exitosa.
 */
const apiClient = async (endpoint, options) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`Error en la petición a ${endpoint}: ${response.statusText}`);
  }

  const data = response.json();
  return data;
};

export default apiClient;
