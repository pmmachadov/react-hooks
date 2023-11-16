// Importar el hook personalizado useCounter desde su ubicación
import { useCounter } from '../hooks/useCounter';

// Definir el componente CounterWithCustomHook
export const CounterWithCustomHook = () => {

    // Utilizar el hook personalizado useCounter para obtener el estado del contador y sus funciones
    const { counter, increment, decrement, reset } = useCounter();

    // Renderizar el contador y botones en el componente
    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            {/* Botón para incrementar el contador en 2 */ }
            <button onClick={ () => increment(2) } className="btn btn-primary">+2</button>

            {/* Botón para resetear el contador */ }
            <button onClick={ reset } className="btn btn-primary">Reset</button>

            {/* Botón para decrementar el contador en 2 */ }
            <button onClick={ () => decrement(2) } className="btn btn-primary">-2</button>
        </>
    );
}
