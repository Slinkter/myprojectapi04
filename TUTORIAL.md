# Tutorial: Flujo de Datos en `useUsers.js` con React y Redux

Este documento explica el ciclo de vida de la carga de datos en el hook `useUsers.js`, desde que el componente se monta hasta que los datos se muestran en pantalla.

## El Flujo de Datos Unidireccional

El patrón sigue un flujo claro y predecible:

**UI Event (`useEffect`) ➡️ Dispatch Action (`fetchUsers`) ➡️ Reducer (actualiza el estado) ➡️ UI (re-renderiza con el nuevo estado)**

### Paso 1: Carga Inicial del Componente

1.  Un componente (ej. `UsersPage`) llama al hook `useUsers()`.
2.  `useSelector(selectAllUsers)` se ejecuta y obtiene el estado inicial de `state.users.users`, que es un array vacío `[]`. La variable `originalUsers` es `[]`.
3.  `useSelector(getUsersStatus)` se ejecuta y obtiene el estado inicial de `state.users.status`, que es `"idle"`.
4.  El componente se renderiza por primera vez, probablemente mostrando una lista vacía.

### Paso 2: El `useEffect` entra en acción

1.  Justo después del primer renderizado, React ejecuta el `useEffect`.
2.  La condición `if (usersStatus === "idle")` es **verdadera**.
3.  Se ejecuta `dispatch(fetchUsers())`, iniciando la petición de datos.

### Paso 3: El Thunk `fetchUsers` y Redux hacen su trabajo

1.  Al despachar `fetchUsers`, Redux Toolkit automáticamente dispara una acción `users/fetchUsers/pending`.
2.  El `extraReducer` en `usersSlice.js` reacciona a esta acción y actualiza el estado: `state.status = "loading"`.
3.  Este cambio en el store provoca una **primera re-renderización**. El componente ahora puede mostrar un indicador de "Cargando...".
4.  Mientras tanto, el thunk `fetchUsers` realiza la llamada a la API.

### Paso 4: La API Responde y el Estado se Actualiza (El Momento Clave)

1.  Cuando la API devuelve los datos (el array de usuarios), el thunk `fetchUsers` finaliza exitosamente.
2.  Redux Toolkit dispara automáticamente la acción `users/fetchUsers/fulfilled`, llevando los datos de la API en el `action.payload`.
3.  El `extraReducer` captura esta acción y actualiza el estado:
    -   `state.status = "succeeded"`.
    -   `state.users = action.payload;` **<-- ¡Aquí es donde los datos se guardan en el store de Redux!**

### Paso 5: Renderizado Final con los Datos

1.  El cambio en el store del paso anterior provoca una **segunda re-renderización**.
2.  El hook `useUsers` se ejecuta de nuevo. Esta vez, `useSelector(selectAllUsers)` lee el estado actualizado y `originalUsers` ahora contiene la lista completa de usuarios.
3.  El componente se renderiza finalmente con la lista de usuarios.
