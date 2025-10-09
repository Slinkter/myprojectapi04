import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import UserList from "../../components/UserList/UserList.jsx";
import { useUsers } from "../../hooks/useUsers.js";

const UsersPage = () => {
    console.log("UsersPage");

    const { users, status, textInput, setTextInput } = useUsers();
    console.log(users);
    return (
        <>
            <SearchBar
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
            />
            <div className="mt-4">
                <UserList users={users} status={status} />
            </div>
        </>
    );
};

export default UsersPage;
