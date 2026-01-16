/**
 * @file Utilidades generales para la aplicación.
 * @author Slinkter
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina nombres de clase de forma condicional y los fusiona con las clases de Tailwind.
 * Útil para crear componentes con variantes de estilo.
 *
 * @param {...(string|string[]|object)} inputs - Una lista de nombres de clase.
 * Puede ser una cadena, un array de cadenas o un objeto con claves como nombres de clase y valores booleanos.
 * @returns {string} Una cadena con los nombres de clase fusionados.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
