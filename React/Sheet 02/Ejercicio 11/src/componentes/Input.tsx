import { ChangeEvent, useState } from "react";

interface InputValues {
    id: string;
    text: string;
    type: string;
    value?: string | number;
    placeholder?: string;
    htmlValidation?: React.InputHTMLAttributes<HTMLInputElement>;
    mensajeFalloVerificacion?: string;
    funcionVerificadora?: (value: string | number) => boolean;
}

function Input({
    id,
    text,
    type,
    value = type === "number" ? 0 : "",
    placeholder = "",
    htmlValidation = {},
    mensajeFalloVerificacion = "Validación fallida",
    funcionVerificadora = () => true,
}: InputValues) {
    const [valueInput, setValueInput] = useState<string | number>(value);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        const newValue = input.value;
        setValueInput(newValue);

        funcionVerificadora(newValue)
            ? input.setCustomValidity("")
            : input.setCustomValidity(mensajeFalloVerificacion);
    };
    return (
        <>
            <label htmlFor={id}>{text}</label>
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                value={valueInput}
                onChange={handleChange}
                {...htmlValidation}
            />
            <br />
        </>
    );
}

export default Input;
