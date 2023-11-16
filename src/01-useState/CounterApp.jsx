// Importar el hook useState desde React
import { useState } from 'react';

// Definir el componente CounterApp
export const CounterApp = () => {

    // Utilizar el hook useState para crear el estado inicial
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    // Desestructurar el estado para obtener los contadores individuales
    const { counter1, counter2, counter3 } = state;

    // Renderizar los contadores en el componente
    return (
        <>
            <h1>Counter1: { counter1 }</h1>
            <h1>Counter2: { counter2 }</h1>
            <h1>Counter3: { counter3 }</h1>

            <hr />

            {/* Botón para incrementar el valor del counter1 */ }
            <button
                className="btn"
                onClick={ () => setCounter({ ...state, counter1: counter1 + 1 }) }
            >
                +1
            </button>
        </>
    );
}
