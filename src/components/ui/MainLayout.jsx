const MainLayout = ({ children }) => {
    return (
        <main className="main-layout">
            <div className="main-layout__container">{children}</div>
        </main>
    );
};

export default MainLayout;
