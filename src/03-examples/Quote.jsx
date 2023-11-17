import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ author, quote }) => {

  // Utiliza useRef para obtener una referencia al elemento <p>
  const pRef = useRef(); //useRef se usa aqui para obtener una referencia al elemento <p> y poder obtener su tamaño (width y height) con getBoundingClientRect()

  // Utiliza useState para mantener el estado del tamaño del cuadro (boxSize)
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  // useLayoutEffect se ejecuta de manera síncrona después de todas las mutaciones del DOM
  // Captura el tamaño del cuadro del elemento <p> y actualiza el estado
  useLayoutEffect(() => {

    // Obtiene las dimensiones del cuadro del elemento <p>
    const { height, width } = pRef.current.getBoundingClientRect();

    // Actualiza el estado con las dimensiones del cuadro
    setBoxSize({ height, width });

  }, [quote]); // Se ejecuta nuevamente si la cita (quote) cambia

  // Renderiza el componente
  return (
    <>
      {/* Bloque de cita con clase y estilo personalizado */ }
      <blockquote
        className="blockquote text-end"
        style={ { display: 'flex' } }
      >
        {/* Elemento <p> con la cita y referencia */ }
        <p ref={ pRef } className="mb-1">{ quote }</p>

        {/* Elemento <footer> con el autor */ }
        <footer className="blockquote-footer"> { author } </footer>
      </blockquote>

      {/* Muestra el tamaño del cuadro como código JSON */ }
      <code>{ JSON.stringify(boxSize) }</code>
    </>
  );
}
