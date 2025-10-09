import { ListItem, Typography } from "@material-tailwind/react";

const UserListItem = ({ user }) => {
    return (
        <ListItem className="flex flex-col justify-center items-center shadow-md bg-white my-2">
            <Typography variant="h5">{user?.name}</Typography>
            <Typography variant="lead">{user?.email}</Typography>
        </ListItem>
    );
};
export default UserListItem;
