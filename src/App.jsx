import React, { useEffect, useState } from "react";
import { List, ListItem, Card } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

const api_url = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filterListUser, setFilterListUser] = useState([]);
  const [textInput, setTextInput] = useState("");
  //
  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);

  //
  const getUsers = async () => {
    const res = await fetch(api_url);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
    return () => {};
  }, []);
  //
  const listfilted = () =>
    users.filter((user) =>
      Object.values(user).join().toLowerCase().includes(textInput.toLowerCase())
    );
  //
  useEffect(() => {
    if (!textInput) {
      setFilterListUser(users);
    } else {
      setFilterListUser(listfilted());
    }
  }, [textInput]);
  //
  const textEmpty = filterListUser.map((user) => (
    <List key={user.id}>
      <ComponentRenderUser usuario={user} />
    </List>
  ));

  const textFill = users.map((user) => (
    <List key={user.id}>
      <ComponentRenderUser usuario={user} />
    </List>
  ));

  //
  console.log(users);
  return (
    <div className="flex flex-col justify-center items-center  min-h-dvh w-screen   sm:bg-yellow-300 md:bg-red-300  bg-gray-300 ">
      <div className=" w-3/4 sm:w-3/4  md:w-2/4   h-full m-5">
        <Input
          label="nombre"
          color="white"
          onChange={(e) => setTextInput(e.target.value)}
        />
        <br />
        <Card className=" ">{textInput > 0 ? textFill : textEmpty}</Card>
      </div>
    </div>
  );
};

const ComponentRenderUser = ({ usuario }) => {
  return (
    <div>
      <ListItem className="flex flex-col justify-center items-center ">
        <h3>{usuario.name}</h3>
        <p>{usuario.email}</p>
      </ListItem>
    </div>
  );
};

export default App;
