/**
 * @file Componente para renderizar un único elemento de la lista de usuarios.
 * @author Slinkter
 */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

/**
 * Renderiza una tarjeta con la información de un usuario.
 *
 * @param {object} props - Propiedades del componente.
 * @param {object} props.user - Objeto del usuario a mostrar.
 * @param {string} props.user.name - Nombre del usuario.
 * @param {string} props.user.email - Email del usuario.
 * @returns {JSX.Element} Un componente de tarjeta que muestra los detalles del usuario.
 */
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
