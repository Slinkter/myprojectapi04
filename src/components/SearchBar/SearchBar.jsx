const SearchBar = ({ value, onChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar por nombre o email..."
                value={value}
                onChange={onChange}
                className="search-bar__input"
                aria-label="Buscar usuarios"
            />
        </div>
    );
};

export default SearchBar;
