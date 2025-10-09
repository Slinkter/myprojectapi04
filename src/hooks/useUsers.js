import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectAllUsers,
    getUsersStatus,
    fetchUsers,
} from "../features/users/usersSlice";

export const useUsers = () => {
    // Estado local para manejar el texto del input de búsqueda.
    const [textInput, setTextInput] = useState("");

    // --- PASO 1 y 5: Selección de datos del Store de Redux ---
    // `useSelector` se suscribe al store de Redux.
    // 1. En la carga inicial, `selectAllUsers` devuelve el valor inicial del slice: un array vacío [].
    // 5. Después de que el fetch es exitoso (ver PASO 4), Redux notifica a este componente.
    //    `useSelector` se vuelve a ejecutar y ahora `selectAllUsers` devuelve la lista completa de usuarios.
    //    Esto provoca una re-renderización con los datos.
    const originalUsers = useSelector(selectAllUsers);

    // Se suscribe al estado de la petición (inicialmente "idle", luego "loading", y finalmente "succeeded" o "failed").
    const usersStatus = useSelector(getUsersStatus);

    // `dispatch` es la función que usamos para enviar acciones a Redux.
    const dispatch = useDispatch();

    // --- PASO 2: Disparar la carga de datos ---
    // `useEffect` se ejecuta después de que el componente se renderiza.
    useEffect(() => {
        // Solo queremos buscar los datos una vez, cuando el estado es "idle" (inactivo).
        // Esto previene que se hagan llamadas a la API en cada re-renderizado.
        if (usersStatus === "idle") {
            // --- PASO 3: Iniciar el proceso asíncrono ---
            // Despachamos la acción `fetchUsers`. Esto NO actualiza los usuarios directamente.
            // Redux Toolkit ejecuta el "thunk" `fetchUsers`, que a su vez:
            // a) Despacha la acción `pending`, cambiando el `usersStatus` a "loading".
            // b) Realiza la llamada a la API.
            // c) Cuando la API responde, despacha la acción `fulfilled` con los datos (ver PASO 4).
            dispatch(fetchUsers());
        }
    }, [usersStatus, dispatch]);

    // --- PASO 4 (implícito) y Optimización ---
    // El `extraReducer` en `usersSlice.js` escucha la acción `fetchUsers.fulfilled`.
    // Cuando la recibe, actualiza el estado del slice, guardando los usuarios en `state.users`.
    // Este cambio en el store es lo que hace que `originalUsers` reciba los datos en el PASO 5.

    // `useMemo` se usa para optimización. Solo recalcula `filteredUsers` si `textInput` u `originalUsers` cambian.
    // Esto evita filtrar la lista en cada re-renderizado si no es necesario.
    const filteredUsers = useMemo(() => {
        if (!textInput) {
            return originalUsers;
        }
        return originalUsers.filter((user) => {
            const searchText = textInput.toLowerCase();
            return user.name.toLowerCase().includes(searchText);
        });
    }, [textInput, originalUsers]);

    // El hook devuelve los datos filtrados, el estado de la carga y los manejadores del input.
    return {
        users: filteredUsers,
        status: usersStatus,
        textInput,
        setTextInput,
    };
};
