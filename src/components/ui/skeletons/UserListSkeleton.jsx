/**
 * @file Componentes de esqueleto para mostrar estados de carga.
 * @author Slinkter
 */

import { Card, CardContent, CardHeader } from "@/components/ui/Card";

/**
 * Renderiza una lista de esqueletos de tarjetas de usuario para simular la carga.
 *
 * @param {object} props - Propiedades del componente.
 * @param {number} [props.count=10] - El número de elementos de esqueleto a renderizar.
 * @returns {JSX.Element} Una lista de componentes de esqueleto.
 */
const UserListSkeleton = ({ count = 10 }) => {
    return (
        <div className="skeleton-list">
            {Array.from({ length: count }).map((_, i) => (
                <UserSkeletonItem key={i} />
            ))}
        </div>
    );
};

/**
 * Renderiza el esqueleto de un único elemento de la lista de usuarios.
 *
 * @returns {JSX.Element} Una tarjeta de esqueleto.
 */
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

/**
 * Componente base de esqueleto con animación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.className - Clases CSS adicionales para personalizar el tamaño del esqueleto.
 * @returns {JSX.Element} Un div con la animación del esqueleto.
 */
const Skeleton = ({ className, ...props }) => (
    <div
        className={`skeleton-loader ${className}`}
        {...props}
    />
);

export default UserListSkeleton;
