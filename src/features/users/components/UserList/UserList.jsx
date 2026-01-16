/**
 * @file Componente que renderiza una lista de usuarios o estados relacionados (carga, error, vacío).
 * @author Slinkter
 */

import UserListItem from "@/features/users/components/UserList/UserListItem";
import UserListSkeleton from "@/components/ui/skeletons/UserListSkeleton";

/**
 * Renderiza la lista de usuarios o un componente de estado (esqueleto, error, sin datos).
 *
 * @param {object} props - Propiedades del componente.
 * @param {Array<object>} props.users - La lista de usuarios a renderizar.
 * @param {('idle'|'loading'|'succeeded'|'failed')} props.status - El estado actual de la carga de datos.
 * @returns {JSX.Element} Un componente que muestra la lista de usuarios, un esqueleto de carga, un mensaje de error o un mensaje de lista vacía.
 */
const UserList = ({ users, status }) => {
    if (status === "loading") {
        return <UserListSkeleton />;
    }

    if (status === "succeeded" && users.length === 0) {
        return (
            <div className="user-list__empty">
                No hay datos para mostrar.
            </div>
        );
    }

    if (status === "failed") {
        return (
            <div className="user-list__error">
                Error al cargar los datos.
            </div>
        );
    }

    return (
        <div className="user-list">
            {users.map((user) => (
                <UserListItem key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
