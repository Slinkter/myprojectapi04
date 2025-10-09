import UserListItem from "./UserListItem";
import UserListSkeleton from "../ui/skeletons/UserListSkeleton";

const UserList = ({ users, status }) => {
    if (status === "loading") {
        return <UserListSkeleton />;
    }

    if (status === "succeeded" && users.length === 0) {
        return (
            <div className="p-5 text-center text-gray-500">
                No hay datos para mostrar.
            </div>
        );
    }

    if (status === "failed") {
        return (
            <div className="p-5 text-center text-red-500">
                Error al cargar los datos.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {users.map((user) => (
                <UserListItem key={user.id} user={user} />
            ))}
        </div>
    );
};

export default UserList;
