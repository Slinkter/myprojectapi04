import React, { Suspense } from 'react';
import MainLayout from './components/ui/MainLayout';
import UserListSkeleton from './components/ui/skeletons/UserListSkeleton';

const UsersPage = React.lazy(() => import('./features/users/UsersPage'));

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
