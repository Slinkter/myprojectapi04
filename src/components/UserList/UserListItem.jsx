import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

const UserListItem = ({ user }) => {
    return (
        <Card className="transition-all hover:scale-[1.02] hover:shadow-lg animate-in fade-in-50">
            <CardHeader>
                <CardTitle>{user?.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600">{user?.email}</p>
            </CardContent>
        </Card>
    );
};
export default UserListItem;
