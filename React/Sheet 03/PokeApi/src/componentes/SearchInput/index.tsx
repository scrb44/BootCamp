import React, { useState, useEffect } from "react";
import { SearchContainer, Input } from "./SearchInput.styles";

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
    value,
    onChange,
}) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            onChange(inputValue);
        }, 300);

        return () => clearTimeout(handler);
    }, [inputValue, onChange]);

    return (
        <SearchContainer>
            <Input
                type="text"
                placeholder="Buscar Pokémon..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </SearchContainer>
    );
};
