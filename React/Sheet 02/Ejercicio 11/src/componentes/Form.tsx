import Input from "./Input";

function Form() {
    return (
        <form action="">
            <Input
                id="userName"
                text="Nombre de usuario: "
                type="text"
                value=""
                htmlValidation={{ required: true }}
                placeholder="Nombre de usuario"
                mensajeFalloVerificacion="Nombre incorrecto"
            />
            <Input
                id="password"
                text="Contraseña: "
                type="password"
                value=""
                funcionVerificadora={(psswd) => psswd.toString().length >= 6}
                htmlValidation={{ required: true, minLength: 6 }}
                placeholder="Contraseña"
                mensajeFalloVerificacion="La contraseña debe tener una longitud mayor que 6"
            />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Form;
