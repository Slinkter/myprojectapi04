import { Input } from "@material-tailwind/react";

const SearchBar = ({ value, onChange }) => {
    return (
        <Input
            label="Buscar por nombre o email"
            onChange={onChange}
            value={value}
        />
    );
};

export default SearchBar;
