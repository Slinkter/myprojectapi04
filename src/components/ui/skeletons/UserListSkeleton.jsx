import { Card, CardContent, CardHeader } from "../Card";

const UserListSkeleton = ({ count = 10 }) => {
    return (
        <div className="skeleton-list">
            {Array.from({ length: count }).map((_, i) => (
                <UserSkeletonItem key={i} />
            ))}
        </div>
    );
};

const UserSkeletonItem = () => (
    <Card className="skeleton-card">
        <CardHeader>
            <Skeleton className="h-6 w-3/4" />
        </CardHeader>
        <CardContent>
            <Skeleton className="h-4 w-full" />
        </CardContent>
    </Card>
);

const Skeleton = ({ className, ...props }) => (
    <div
        className={`skeleton-loader ${className}`}
        {...props}
    />
);

export default UserListSkeleton;
