import React, { useEffect, useState } from "react";
import { List, ListItem, Card } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

const api_url = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [originalUsers, setOriginalUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [textInput, setTextInput] = useState("");

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

  useEffect(() => {
    getUsers();
  }, []);
  /* parte 2 :  */
  const handleSearch = () => {
    const filteredUsers = originalUsers.filter((user) =>
      Object.values(user).join().toLowerCase().includes(textInput.toLowerCase())
    );
    console.log("filter  :", filteredUsers);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    handleSearch();
  }, [textInput, originalUsers]);

  /* parte 3 : Validacion  */
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
          <ComponentRenderUser usuario={user} key={user.id} />
        ))}
      </List>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-dvh w-screen sm:bg-yellow-300 md:bg-blue-gray-600 bg-blue-gray-600">
      <div className="w-3/4 sm:w-3/4 md:w-2/4 h-full m-5">
        <Input
          label="nombre"
          color="white"
          onChange={(e) => setTextInput(e.target.value)}
        />
        <br />
        <Card>{renderUsers()}</Card>
      </div>
    </div>
  );
};

const ComponentRenderUser = ({ usuario }) => {
  return (
    <div>
      <ListItem className="flex flex-col justify-center items-center">
        <h3>{usuario.name}</h3>
        <p>{usuario.email}</p>
      </ListItem>
    </div>
  );
};

export default App;
