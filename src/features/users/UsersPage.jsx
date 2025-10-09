import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
/* import { selectAllUsers, getUsersStatus, fetchUsers } from "./usersSlice.js"; */
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import UserList from "../../components/UserList/UserList.jsx";
import { fetchUsers, getUsersStatus, selectAllUsers } from "./usersSlice.js";

const UsersPage = () => {
    const dispatch = useDispatch();
    const originalUsers = useSelector(selectAllUsers);
    const usersStatus = useSelector(getUsersStatus);

    const [textInput, setTextInput] = useState("");

    useEffect(() => {
        if (usersStatus === "idle") {
            dispatch(fetchUsers());
        }
    }, [usersStatus, dispatch]);

    const filteredUsers = useMemo(() => {
        if (!textInput) {
            return originalUsers;
        }
        return originalUsers.filter((user) => {
            const searchText = textInput.toLowerCase();
            return (
                user.name.toLowerCase().includes(searchText) ||
                user.email.toLowerCase().includes(searchText)
            );
        });
    }, [textInput, originalUsers]);

    return (
        <>
            <SearchBar
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
            />
            <div className="mt-4">
                <UserList users={filteredUsers} status={usersStatus} />
            </div>
        </>
    );
};

export default UsersPage;
