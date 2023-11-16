import { useState } from "react";

// Definir el hook personalizado useCounter
export const useCounter = (initialValue = 10) => {

    // Utilizar useState para crear el estado del contador
    const [counter, setCounter] = useState(initialValue);

    // Función para incrementar el contador por un valor específico (por defecto 1)
    const increment = (value = 1) => {
        setCounter(counter + value);
    }

    // Función para decrementar el contador por un valor específico (por defecto 1)
    const decrement = (value = 1) => {
        // Puedes descomentar la siguiente línea si quieres evitar que el contador sea negativo
        // if (counter === 0) return;
        setCounter(counter - value);
    }

    // Función para resetear el contador al valor inicial
    const reset = () => {
        setCounter(initialValue);
    }

    // Devolver el estado del contador y las funciones relacionadas
    return {
        counter,
        increment,
        decrement,
        reset,
    };
}
