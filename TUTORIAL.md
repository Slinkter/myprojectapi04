# 🎓 Tutorial Completo: Creando una App React Profesional

Este tutorial te guiará paso a paso para entender cómo está construido este proyecto. No es solo "hacer que funcione", es "hacerlo bien" con estándares de 2025.

---

## 📑 Índice
1.  [Conceptos Clave](#1-conceptos-clave)
2.  [Estructura del Proyecto](#2-estructura-del-proyecto)
3.  [Paso 1: La Capa de Servicios](#paso-1-la-capa-de-servicios)
4.  [Paso 2: Gestión del Estado con Redux](#paso-2-gestión-del-estado-con-redux)
5.  [Paso 3: Custom Hooks (La Magia)](#paso-3-custom-hooks-la-magia)
6.  [Paso 4: Componentes y Estilos BEM](#paso-4-componentes-y-estilos-bem)
7.  [Conclusión](#conclusión)

---

## 1. Conceptos Clave

Antes de empezar, entendamos qué hace que este proyecto sea "Profesional":
*   **Feature-Based Architecture**: Organizamos carpetas por "lo que hace el negocio" (Usuarios, Productos), no por "tipo de archivo" (Componentes, Hooks).
*   **BEM (Block Element Modifier)**: Una metodología de nomenclatura CSS que hace que tus estilos sean fáciles de entender y mantener.
*   **Separation of Concerns**: Cada parte del código tiene UN solo trabajo.

---

## 2. Estructura del Proyecto

Observa la carpeta `src/features/users`. Aquí vive todo lo relacionado con los usuarios.
*   `api/`: ¿Cómo obtengo los datos?
*   `model/`: ¿Cómo guardo los datos? (Redux Slice)
*   `components/`: ¿Cómo muestro los datos?
*   `hooks/`: ¿Cómo manejo la lógica?

Esta estructura permite que si mañana quieres borrar la funcionalidad de "Usuarios", solo borras esa carpeta y listo.

---

## 3. Paso 1: La Capa de Servicios

Nunca llames a `fetch` directamente en tus componentes. Crea un "Servicio".

**Archivo**: `src/services/users.service.js`
```javascript
export const getUsers = async () => {
    const response = await fetch("...");
    if (!response.ok) throw new Error("Error");
    return await response.json();
};
```
**¿Por qué?** Si mañana la API cambia de `fetch` a `axios` o `GraphQL`, solo cambias este archivo. El resto de tu app ni se entera.

---

## 4. Paso 2: Gestión del Estado con Redux

Usamos **Redux Toolkit** para manejar los datos globales.

**Archivo**: `src/features/users/usersSlice.js`
*   **State**: Guardamos `users` (lista), `status` (estado de carga) y `error`.
*   **Thunk**: `fetchUsers` usa nuestro servicio del Paso 1.
*   **ExtraReducers**: Escuchan al Thunk. Cuando `fetchUsers` está "pending", ponemos `status = 'loading'`. Cuando está "fulfilled", guardamos los datos.

---

## 5. Paso 3: Custom Hooks (La Magia)

Aquí es donde conectamos la Lógica con la Vista.

**Archivo**: `src/hooks/useUsers.js`
Este hook es el "cerebro".
1.  Usa `useSelector` para leer de Redux.
2.  Usa `useDispatch` para pedir datos.
3.  Usa `useMemo` para filtrar los usuarios localmente sin afectar el rendimiento.

**Lección**: Tus componentes visuales (`UsersPage`) no deberían tener lógica compleja (`if`, `filter`, `map` complejos). Eso va aquí.

---

## 6. Paso 4: Componentes y Estilos BEM

En lugar de llenar nuestro HTML de clases de Tailwind (`w-full p-4 bg-red-500...`), creamos clases semánticas en `index.css`.

**CSS (`index.css`)**:
```css
.card {
  @apply rounded-lg border bg-card text-card-foreground shadow-sm;
}
```

**JSX (`Card.jsx`)**:
```jsx
<div className="card">...</div>
```

Esto hace que tu código sea mucho más limpio y legible. Si quieres cambiar el estilo de TODAS las tarjetas, solo editas el CSS.

---

## Conclusión

Has aprendido a construir una aplicación escalable. No hemos escrito código "rápido y sucio", hemos construido una arquitectura sólida que puede crecer a miles de usuarios y componentes sin colapsar.

¡Sigue explorando el código y trata de añadir una nueva feature siguiendo estos patrones!
