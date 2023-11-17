import React, { useEffect, useState } from 'react';
import { Message } from './Message';

// Componente funcional SimpleForm
export const SimpleForm = () => {

    // Estado del formulario usando el hook useState
    const [formState, setFormState] = useState({    // Estado inicial del formulario
        username: 'strider',    // Nombre de usuario
        email: 'fernando@google.com'    // Correo electrónico
    });

    // Desestructuración del estado del formulario para acceder a las propiedades
    const { username, email } = formState;

    // Función para manejar cambios en los campos de entrada del formulario
    const onInputChange = ({ target }) => { // Desestructurar el evento para obtener el campo de entrada
        const { name, value } = target; // Desestructurar el nombre y valor del campo de entrada
        setFormState({
            ...formState,   // Mantener los valores anteriores
            [name]: value   // Actualizar el valor del campo de entrada que cambió
        });
    }

    // useEffect para ejecutar código cuando el componente se monta (solo una vez)
    useEffect(() => {   // Recibe una función que se ejecuta cuando el componente se monta
        // console.log('useEffect called!');
    }, []); // El arreglo vacío indica que el efecto se ejecuta solo una vez

    // useEffect para ejecutar código cuando el estado del formulario cambia
    useEffect(() => {   // Recibe una función que se ejecuta cuando el componente se monta
        // console.log('formState changed!');
    }, [formState]);    // El arreglo contiene las dependencias del efecto (se ejecuta cuando cambian)

    // useEffect para ejecutar código cuando el valor de 'email' cambia
    useEffect(() => {   // Recibe una función que se ejecuta cuando el componente se monta
        // console.log('email changed!');
    }, [email]);    // El arreglo contiene las dependencias del efecto (se ejecuta cuando cambian)

    // Renderización del componente
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            {/* Campo de entrada para el nombre de usuario */ }
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            {/* Campo de entrada para el correo electrónico */ }
            <input
                type="email"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {/* Renderizar el componente Message solo si el nombre de usuario es 'strider2' */ }
            {
                (username === 'strider2') && <Message />
            }

        </>
    )
}
