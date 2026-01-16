# User List React SPA

Este proyecto es una Single Page Application (SPA) construida con React y Vite que muestra una lista de usuarios. La aplicación permite a los usuarios ver una lista de usuarios y filtrarlos por nombre en tiempo real.

## 🚀 Propósito

El propósito principal de esta aplicación es demostrar una arquitectura de front-end limpia, escalable y mantenible. Se han aplicado principios de **Clean Architecture** y **SOLID** para asegurar una clara separación de conceptos y un bajo acoplamiento entre las distintas capas del sistema.

## ✨ Características

-   **Visualización de Usuarios**: Muestra una lista de usuarios obtenida desde una API externa.
-   **Búsqueda en Tiempo Real**: Filtra la lista de usuarios por nombre a medida que el usuario escribe en la barra de búsqueda.
-   **Estado de Carga**: Muestra un esqueleto (skeleton) de carga mientras se obtienen los datos.
-   **Manejo de Errores**: Muestra un mensaje de error si la obtención de datos falla.

## 🛠️ Instalación y Setup

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1.  **Clona el repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2.  **Instala las dependencias**:
    Se recomienda usar `pnpm` como gestor de paquetes para asegurar la consistencia con el archivo `pnpm-lock.yaml`.
    ```bash
    pnpm install
    ```

3.  **Ejecuta el servidor de desarrollo**:
    ```bash
    pnpm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

## 🏛️ Arquitectura Aplicada

La arquitectura de esta aplicación está diseñada para ser modular y escalable, siguiendo los principios de **Clean Architecture**. Cada capa tiene una responsabilidad única y está desacoplada de las demás.

### Capas de la Arquitectura

1.  **Capa de Servicios (`src/services`)**:
    -   **`api.js`**: Cliente de API genérico que centraliza todas las solicitudes `fetch`. Abstrae la lógica de comunicación con el backend, facilitando la configuración de cabeceras, manejo de errores y URL base.
    -   **`users.service.js`**: Utiliza el `apiClient` para realizar operaciones específicas del dominio de usuarios (ej. `getUsers`). Actúa como un intermediario entre la lógica de negocio y el cliente de API.

2.  **Capa de Estado (Redux Toolkit) (`src/features`)**:
    -   **`usersSlice.js`**: Define el estado global para los usuarios, incluyendo la lista de usuarios, el estado de la petición (`status`), y el término de búsqueda (`searchTerm`). Utiliza `createAsyncThunk` para manejar las acciones asíncronas y `createSelector` para optimizar la selección y el filtrado de datos, evitando recálculos innecesarios.

3.  **Capa de Lógica de UI (`src/hooks`)**:
    -   **`useUsers.js`**: Custom Hook que encapsula toda la lógica de la página de usuarios. Se encarga de:
        -   Despachar la acción para cargar los usuarios.
        -   Suscribirse al estado de Redux (`users`, `status`, `searchTerm`).
        -   Proveer un manejador (`handleSearch`) para actualizar el término de búsqueda en Redux.
    -   Este hook actúa como el "cerebro" de la UI, conectando la vista con el estado de la aplicación de una manera limpia y reutilizable.

4.  **Capa de Presentación (Componentes) (`src/components`, `src/features/users`)**:
    -   **`UsersPage.jsx`**: Componente "contenedor" que se limita a renderizar la estructura de la página y pasar los datos y manejadores del hook `useUsers` a los componentes de presentación.
    -   **`UserList.jsx` / `UserListItem.jsx`**: Componentes puramente presentacionales que reciben datos a través de props y no contienen lógica de negocio. Son responsables únicamente de cómo se ve la UI.
    -   **`SearchBar.jsx`**: Componente de UI reutilizable y controlado.

### Flujo de Datos

El flujo de datos sigue un patrón unidireccional, lo que hace que la aplicación sea predecible y fácil de depurar:

1.  **Carga Inicial**:
    -   `UsersPage` monta y llama al hook `useUsers`.
    -   `useUsers` despacha la acción `fetchUsers`.
    -   `usersSlice` maneja el `pending` y actualiza el estado a `loading`.
    -   El `thunk` llama al `users.service.js`, que a su vez usa el `apiClient`.
    -   Una vez que los datos se reciben, el `thunk` despacha `fulfilled`, y el `slice` actualiza el estado con los usuarios.
    -   La UI se re-renderiza para mostrar la lista de usuarios.

2.  **Filtrado de Usuarios**:
    -   El usuario escribe en el `SearchBar`.
    -   El evento `onChange` llama a `handleSearch` del hook `useUsers`.
    -   `handleSearch` despacha la acción `setSearchTerm` con el nuevo valor.
    -   El `usersSlice` actualiza el `searchTerm` en el estado de Redux.
    -   El selector memoizado `selectFilteredUsers` se recalcula automáticamente, devolviendo la lista filtrada.
    -   La UI se re-renderiza para mostrar solo los usuarios que coinciden.

Este enfoque asegura que cada parte del sistema tenga una única responsabilidad, haciendo que el código sea más fácil de entender, probar y mantener a largo plazo.