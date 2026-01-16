/**
 * @file Componente principal de la aplicación.
 * @author Slinkter
 */

import React, { Suspense } from 'react';
import MainLayout from '@/components/ui/MainLayout';
import UserListSkeleton from '@/components/ui/skeletons/UserListSkeleton';

const UsersPage = React.lazy(() => import('@/features/users/UsersPage'));

/**
 * Componente raíz de la aplicación.
 * Configura el layout principal y el enrutamiento de las páginas.
 *
 * @returns {JSX.Element} El componente principal de la aplicación.
 */
const App = () => {
  return (
    <MainLayout>
      <h1 className='app__title'>Buscador de Usuarios</h1>
      <Suspense fallback={<UserListSkeleton />}>
        <UsersPage />
      </Suspense>
    </MainLayout>
  );
};

export default App;
