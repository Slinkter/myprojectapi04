import { useEffect, useState } from "react";
import { List, ListItem, Card, Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [originalUsers, setOriginalUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [textInput, setTextInput] = useState("");

    useEffect(() => {
        // func
        console.log("useEffect-1");

        const getUsers = async () => {
            try {
                const api_url = "https://jsonplaceholder.typicode.com/users";
                const res = await fetch(api_url);
                const data = await res.json();
                setOriginalUsers(data);
                setUsers(data);
            } catch (error) {
                console.error("Error fetching data from API:", error);
            } finally {
                setLoading(false);
            }
        };
        // exec
        getUsers();
    }, []);

    useEffect(() => {
        console.log("useEffect-2");
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

    /*   */

    const ComponentRenderUser = ({ user }) => {
        return (
            <ListItem className=" flex flex-col justify-center items-center shadow-md  bg-white my-2">
                <Typography variant="h5">{user?.name}</Typography>
                <Typography variant="lead">{user?.email}</Typography>
            </ListItem>
        );
    };
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
                    <ComponentRenderUser key={user.id} user={user} />
                ))}
            </List>
        );
    };
    console.log("----------------------");
    console.log("render");
    console.log(originalUsers);

    return (
        <div className="containerStyle">
            <div className="w-full md:w-3/4">
                <Input
                    label="nombre"
                    onChange={(e) => setTextInput(e.target.value)}
                />
            </div>
            <div className="w-full md:w-3/4">{renderUsers()}</div>
        </div>
    );
};

export default App;
