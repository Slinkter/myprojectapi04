/**
 * @file Componentes de tarjeta reutilizables para mostrar contenido.
 * @author Slinkter
 */

import { cn } from "@/lib/utils";

/**
 * Componente principal de la tarjeta, un contenedor para el contenido.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} [props.className] - Clases CSS adicionales para el contenedor de la tarjeta.
 * @param {React.ReactNode} props.children - Contenido a renderizar dentro de la tarjeta.
 * @returns {JSX.Element} El componente de la tarjeta.
 */
const Card = ({ className, children }) => {
    return (
        <div
            className={cn(
                "card",
                className
            )}
        >
            {children}
        </div>
    );
};

/**
 * Componente para el encabezado de la tarjeta.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} [props.className] - Clases CSS adicionales para el encabezado.
 * @param {React.ReactNode} props.children - Contenido del encabezado.
 * @returns {JSX.Element} El componente del encabezado de la tarjeta.
 */
const CardHeader = ({ className, children }) => (
    <div className={cn("card__header", className)}>{children}</div>
);

/**
 * Componente para el título de la tarjeta.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} [props.className] - Clases CSS adicionales para el título.
 * @param {React.ReactNode} props.children - Contenido del título.
 * @returns {JSX.Element} El componente del título de la tarjeta.
 */
const CardTitle = ({ className, children }) => (
    <h3 className={cn("card__title", className)}>
        {children}
    </h3>
);

/**
 * Componente para la descripción de la tarjeta.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} [props.className] - Clases CSS adicionales para la descripción.
 * @param {React.ReactNode} props.children - Contenido de la descripción.
 * @returns {JSX.Element} El componente de la descripción de la tarjeta.
 */
const CardDescription = ({ className, children }) => (
    <p className={cn("card__description", className)}>{children}</p>
);

/**
 * Componente para el contenido principal de la tarjeta.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} [props.className] - Clases CSS adicionales para el contenido.
 * @param {React.ReactNode} props.children - Contenido principal.
 * @returns {JSX.Element} El componente del contenido de la tarjeta.
 */
const CardContent = ({ className, children }) => (
    <div className={cn("card__content", className)}>{children}</div>
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent };

