import UsersPage from "./features/users/UsersPage";

const App = () => {
    return (
        <div className="containerStyle">
            <div className="w-full md:w-3/4">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
                    Buscador de Usuarios con Redux
                </h1>
                <UsersPage />
            </div>
        </div>
    );
};

export default App;
