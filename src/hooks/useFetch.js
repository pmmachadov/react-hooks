import { useEffect, useState } from "react";

export const useFetch = (url) => {

    // Inicializa el estado con valores iniciales
    const [state, setState] = useState({
        data: null,         // Los datos de la respuesta de la solicitud
        isLoading: true,    // Indica si la solicitud está en curso
        hasError: null,     // Almacena errores si ocurrieron durante la solicitud
    });

    // Función asincrónica para realizar la solicitud
    const getFetch = async () => {
        // Actualiza el estado para indicar que la carga está en curso
        setState({
            ...state,
            isLoading: true,
        });

        // Realiza la solicitud HTTP utilizando la URL proporcionada
        const resp = await fetch(url);
        // Parsea la respuesta como JSON porque la respuesta es un string. Ej: "{ "name": "John" }"
        const data = await resp.json();

        // Actualiza el estado con los datos y marca que la carga ha terminado
        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    // Efecto secundario que se ejecuta cuando la URL cambia
    useEffect(() => {
        getFetch(); // Llama a la función para realizar la solicitud
    }, [url]);

    // Devuelve un objeto con los datos, el estado de carga y posibles errores
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
