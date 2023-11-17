import { useState } from 'react';

// Definición del hook useForm
export const useForm = (initialForm = {}) => {

    // Utiliza el hook useState para manejar el estado del formulario
    const [formState, setFormState] = useState(initialForm);

    // Función para manejar cambios en los campos de entrada del formulario
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // Actualiza el estado del formulario con los nuevos valores
        setFormState({
            ...formState,
            [name]: value
        });
    }

    // Función para restablecer el formulario a su estado inicial
    const onResetForm = () => {
        // Establece el estado del formulario al estado inicial proporcionado
        setFormState(initialForm);
    }

    // Devuelve un objeto que contiene el estado actual del formulario,
    // la función para manejar cambios en los campos de entrada,
    // y la función para restablecer el formulario
    return {
        ...formState,  // Desestructura el estado del formulario para incluir sus propiedades directamente en el objeto de retorno
        formState,     // También incluye el estado del formulario completo como una propiedad adicional
        onInputChange, // Función para manejar cambios en los campos de entrada
        onResetForm,   // Función para restablecer el formulario
    }
}
