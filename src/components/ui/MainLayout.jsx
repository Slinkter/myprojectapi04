const MainLayout = ({ children }) => {
    return (
        <main className="bg-gray-100 min-h-dvh w-screen flex flex-col items-start gap-6 p-4 sm:p-8 md:p-12">
            <div className="w-full max-w-4xl mx-auto">{children}</div>
        </main>
    );
};

export default MainLayout;
