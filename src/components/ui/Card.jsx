import { cn } from "../../lib/utils"; // Asumimos que tendremos un helper cn para clases condicionales

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

const CardHeader = ({ className, children }) => (
    <div className={cn("card__header", className)}>{children}</div>
);

const CardTitle = ({ className, children }) => (
    <h3 className={cn("card__title", className)}>
        {children}
    </h3>
);

const CardDescription = ({ className, children }) => (
    <p className={cn("card__description", className)}>{children}</p>
);

const CardContent = ({ className, children }) => (
    <div className={cn("card__content", className)}>{children}</div>
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent };

