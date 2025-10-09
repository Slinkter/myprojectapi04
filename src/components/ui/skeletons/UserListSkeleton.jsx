import { Card, CardContent, CardHeader } from "../Card";

const UserListSkeleton = ({ count = 10 }) => {
    return (
        <div className="space-y-4">
            {Array.from({ length: count }).map((_, i) => (
                <UserSkeletonItem key={i} />
            ))}
        </div>
    );
};

const UserSkeletonItem = () => (
    <Card className="w-full max-w-sm mx-auto my-2">
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
        className={`animate-pulse rounded-md bg-gray-200 ${className}`}
        {...props}
    />
);

export default UserListSkeleton;
