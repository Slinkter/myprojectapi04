# API04: Buscador de Usuarios (Refactorizado)

## 1. Descripción General

Esta aplicación es un buscador de usuarios simple que consume datos de una API externa (JSONPlaceholder). La interfaz permite a los usuarios buscar y filtrar una lista de usuarios por nombre o email en tiempo real.

Este proyecto es el resultado de una refactorización profunda centrada en aplicar principios de arquitectura de software moderna, mejorar el rendimiento y elevar la calidad de la UI/UX, sin alterar la funcionalidad original.

## 2. Tecnologías Utilizadas

- **Framework Frontend:** React 18
- **Gestión de Estado:** Redux Toolkit
- **Estilos:** Tailwind CSS
- **Animaciones:** `tailwindcss-animate`
- **Tipografía:** Inter (Google Fonts)
- **Bundler:** Vite
- **Linting:** ESLint

## 3. Arquitectura del Software

La arquitectura ha sido reestructurada para seguir un modelo basado en componentes, con una clara separación entre la lógica de negocio, el estado de la aplicación y la capa de presentación.

### Diagrama de Arquitectura (Mermaid)

```mermaid
graph TD
    subgraph Fase de Carga
        A[App.jsx] -- Carga inicial --> S[Suspense];
        S -- fallback --> SK[UserListSkeleton.jsx];
    end

    subgraph Aplicación Cargada
        A -- Carga diferida (Lazy) --> P[UsersPage.jsx];
    end

    subgraph Flujo de Datos
        P -- usa --> H[useUsers.js (Hook)];
        H -- despacha acción --> R[Redux Store (usersSlice.js)];
        R -- obtiene datos de --> API[JSONPlaceholder API];
        API -- responde a --> R;
        R -- actualiza estado --> H;
        H -- provee datos a --> P;
    end

    subgraph Componentes de UI
        P -- renderiza --> SB[SearchBar.jsx];
        P -- renderiza --> UL[UserList.jsx];
        UL -- renderiza múltiples --> ULI[UserListItem.jsx];
        ULI -- construido sobre --> C[Card.jsx];
    end

    style S fill:#f9f,stroke:#333,stroke-width:2px
    style SK fill:#ff9,stroke:#333,stroke-width:2px
    style H fill:#9cf,stroke:#333,stroke-width:2px
    style R fill:#c9f,stroke:#333,stroke-width:2px
```

### Principios Clave Aplicados:

1.  **Separación de Lógica y Vista:** Toda la lógica de estado, efectos y filtrado de datos fue extraída del componente `UsersPage.jsx` y centralizada en el custom hook `useUsers.js`. Esto deja a `UsersPage` como un componente puramente presentacional.

2.  **Arquitectura de Componentes Reutilizables:** Se creó un directorio `src/components/ui` para componentes genéricos (`MainLayout.jsx`, `Card.jsx`) que no tienen lógica de negocio y pueden ser reutilizados en toda la aplicación.

3.  **Rendimiento (Code Splitting):** El componente principal `UsersPage.jsx` se carga de forma diferida (`React.lazy`) en `App.jsx`. Durante la carga, se muestra un componente `UserListSkeleton.jsx` gracias a `<Suspense>`, mejorando drásticamente el *Time to Interactive* (TTI) y evitando saltos de layout (CLS).

---

### ### Mentoría: Aplicando SOLID en tu Proyecto

Aquí se explica cómo los principios SOLID fueron aplicados durante la refactorización de este proyecto.

#### **S - Principio de Responsabilidad Única (SRP)**

Este principio establece que un componente o módulo debe tener una, y solo una, razón para cambiar.

*   **Antes:** El componente `UsersPage.jsx` era responsable de múltiples tareas:
    1.  Disparar la carga de datos (`useEffect`).
    2.  Manejar el estado del input de búsqueda (`useState`).
    3.  Contener la lógica de filtrado de usuarios (`useMemo`).
    4.  Renderizar la estructura de la página.

*   **Después (Refactorizado):** Las responsabilidades se dividieron:
    *   **`useUsers.js` (Custom Hook):** Ahora tiene la **única responsabilidad** de manejar la lógica de datos de los usuarios (fetching, estado de carga, filtrado y estado del input). Si la lógica de cómo se obtienen o filtran los datos cambia, este es el único archivo que se modifica.
    *   **`UsersPage.jsx`:** Su **única responsabilidad** es ahora la **presentación**. Recibe los datos y funciones del hook `useUsers` y los pasa a los componentes de UI correspondientes (`SearchBar`, `UserList`). Su única razón para cambiar sería un rediseño de la página.

#### **O - Principio de Abierto/Cerrado**

Este principio dicta que las entidades de software (componentes, clases) deben estar abiertas a la extensión, pero cerradas a la modificación.

*   **Aplicación:** El mejor ejemplo es el nuevo componente `src/components/ui/Card.jsx`.
    *   **Cerrado a la modificación:** La lógica interna de `Card` (cómo renderiza un contenedor con bordes, sombra y padding) está definida y no necesita ser modificada.
    *   **Abierto a la extensión:** Gracias al uso de `props.children`, podemos renderizar *cualquier* contenido dentro de él sin alterar su código fuente. Lo usamos en `UserListItem.jsx` para mostrar los datos de un usuario, pero podríamos usar el mismo `Card` en otro lugar para mostrar un formulario, una imagen o cualquier otra cosa.

    ```jsx
    // src/components/ui/Card.jsx
    const Card = ({ className, children }) => {
        return (
            <div className={cn("rounded-lg ... shadow-sm", className)}>
                {children} // <-- Abierto a la extensión
            </div>
        );
    };
    ```

#### **D - Principio de Inversión de Dependencias (DIP)**

Este principio sugiere que los módulos de alto nivel no deben depender de los módulos de bajo nivel; ambos deben depender de abstracciones.

*   **Aplicación en React (Hooks):** Este es uno de los beneficios más poderosos de los custom hooks.
    *   **Módulo de Alto Nivel:** El componente `UsersPage.jsx` (la vista).
    *   **Módulo de Bajo Nivel:** La implementación concreta de la gestión del estado (Redux, `fetch`, `useMemo`, etc.).
    *   **Abstracción:** El custom hook `useUsers.js`.

*   **Antes:** `UsersPage.jsx` dependía directamente de los detalles de implementación de Redux (`useSelector`, `useDispatch`) y de la lógica de filtrado (`useMemo`). Estaba fuertemente acoplado a *cómo* se obtenían y procesaban los datos.

*   **Después (Refactorizado):** `UsersPage.jsx` ya no sabe *cómo* se gestionan los datos. Solo depende de la "interfaz" (la abstracción) que le provee el hook `useUsers`:

    ```jsx
    // src/features/users/UsersPage.jsx
    const { users, status, textInput, setTextInput } = useUsers(); // <-- Depende de la abstracción
    ```

    El componente `UsersPage` ahora depende de una abstracción (`useUsers`), no de los detalles concretos. Podríamos cambiar completamente la implementación interna de `useUsers` (por ejemplo, pasar de Redux a React Query o a `fetch` nativo) y `UsersPage.jsx` **no requeriría ninguna modificación**.

## 4. Instalación y Ejecución

1.  Clona el repositorio.
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Ejecuta el servidor de desarrollo:
    ```bash
    npm run dev
    ```