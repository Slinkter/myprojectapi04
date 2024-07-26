import React, { useEffect, useState } from "react";
import { List, ListItem, Card, Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

const api_url = "https://jsonplaceholder.typicode.com/users";

const App = () => {
    const [originalUsers, setOriginalUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [textInput, setTextInput] = useState("");

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch(api_url);
                const data = await res.json();
                setOriginalUsers(data);
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data from API:", error);
            }
        };
        getUsers();
    }, []);

    useEffect(() => {
        const handleSearch = () => {
            const filteredUsers = originalUsers.filter((user) =>
                Object.values(user)
                    .join()
                    .toLowerCase()
                    .includes(textInput.toLowerCase())
            );
            setUsers(filteredUsers);
        };
        handleSearch();
    }, [textInput, originalUsers]);

    /*  */
    const renderUsers = () => {
        if (loading) {
            return <div className="p-5">Loading....</div>;
        }
        if (users.length === 0) {
            return <div className="p-5">no hay datos....</div>;
        }
        return (
            <List>
                {users.map((user) => (
                    <ComponentRenderUser key={user.id} usuario={user} />
                ))}
            </List>
        );
    };

    return (
        <div className="min-h-dvh w-screen flex flex-col justify-start items-center  gap-6 p-12 bg-red-100 sm:bg-yellow-300 md:bg-blue-gray-600 lg:bg-gray-100">
            <div className="w-5/6 md:w-1/2">
                <Input
                    label="nombre"
                    onChange={(e) => setTextInput(e.target.value)}
                />
            </div>
            <div className="w-5/6 md:w-1/2">
                <Card>{renderUsers()}</Card>
            </div>
        </div>
    );
};

const ComponentRenderUser = ({ usuario }) => {
    return (
        <ListItem className="flex flex-col justify-center items-center">
            <Typography variant="h5">{usuario.name}</Typography>
            <code>{usuario.email}</code>
        </ListItem>
    );
};

export default App;
