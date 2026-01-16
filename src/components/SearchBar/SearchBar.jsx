/**
 * @file Componente de barra de búsqueda reutilizable.
 * @author Slinkter
 */

/**
 * Renderiza un input de búsqueda controlado.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.value - El valor actual del input de búsqueda.
 * @param {Function} props.onChange - La función a llamar cuando el valor del input cambia.
 * @returns {JSX.Element} Un componente de input para la búsqueda.
 */
const SearchBar = ({ value, onChange }) => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Buscar por nombre o email...'
        value={value}
        onChange={onChange}
        className='search-bar__input'
        aria-label='Buscar usuarios'
      />
    </div>
  );
};

export default SearchBar;
