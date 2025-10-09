const SearchBar = ({ value, onChange }) => {
    return (
        <div className="w-full mb-8">
            <input
                type="text"
                placeholder="Buscar por nombre o email..."
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
        </div>
    );
};

export default SearchBar;
