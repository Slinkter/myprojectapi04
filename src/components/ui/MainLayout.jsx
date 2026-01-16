/**
 * @file Componente de layout principal para la aplicación.
 * @author Slinkter
 */

/**
 * Proporciona una estructura de layout consistente para las páginas de la aplicación.
 *
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Los componentes hijos que se renderizarán dentro del layout.
 * @returns {JSX.Element} El componente del layout principal.
 */
const MainLayout = ({ children }) => {
    return (
        <main className="main-layout">
            <div className="main-layout__container">{children}</div>
        </main>
    );
};

export default MainLayout;
