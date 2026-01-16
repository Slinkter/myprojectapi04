/**
 * @file Componente de página que muestra una lista de usuarios y una barra de búsqueda.
 * @author Slinkter
 */

import SearchBar from '@/components/SearchBar/SearchBar.jsx';
import UserList from '@/features/users/components/UserList/UserList.jsx';
import { useUsers } from '@/hooks/useUsers.js';

/**
 * Componente funcional que renderiza la página de usuarios.
 * Utiliza el custom hook `useUsers` para obtener la lógica y el estado.
 *
 * @returns {JSX.Element} El componente de la página de usuarios.
 */
const UsersPage = () => {
  // El hook `useUsers` ahora provee todo lo necesario.
  const { users, status, searchTerm, handleSearch } = useUsers();

  return (
    <>
      {/* El SearchBar ahora es un componente controlado por el estado de Redux */}
      <SearchBar value={searchTerm} onChange={handleSearch} />
      <div className='mt-4'>
        <UserList users={users} status={status} />
      </div>
    </>
  );
};

export default UsersPage;
