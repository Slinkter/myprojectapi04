import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/Card";

const UserListItem = ({ user }) => {
    return (
        <Card className="card--hoverable">
            <CardHeader>
                <CardTitle>{user?.name}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="card__text-content">{user?.email}</p>
            </CardContent>
        </Card>
    );
};
export default UserListItem;
