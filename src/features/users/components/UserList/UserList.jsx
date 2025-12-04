import UserListItem from "./UserListItem";
import UserListSkeleton from "../../../../components/ui/skeletons/UserListSkeleton";

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
