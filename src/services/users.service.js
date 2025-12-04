export const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        throw new Error("Error al obtener los usuarios");
    }
    return await response.json();
};
