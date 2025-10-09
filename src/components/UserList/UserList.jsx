import { List } from "@material-tailwind/react";
import UserListItem from "./UserListItem";

const UserList = ({ users, status }) => {
    if (status === "loading") {
        return <div className="p-5">Cargando...</div>;
    }

    if (status === "succeeded" && users.length === 0) {
        return <div className="p-5">No hay datos para mostrar.</div>;
    }

    if (status === "failed") {
        return (
            <div className="p-5 text-red-500">Error al cargar los datos.</div>
        );
    }

    return (
        <List>
            {users.map((user) => (
                <UserListItem key={user.id} user={user} />
            ))}
        </List>
    );
};

export default UserList;
