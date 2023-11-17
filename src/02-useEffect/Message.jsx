import { useEffect, useState } from "react";

export const Message = () => {

  // Estado para almacenar las coordenadas x e y
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // useEffect se utiliza para realizar efectos secundarios en el componente
  useEffect(() => {

    // Función que se ejecuta cuando el mouse se mueve
    const onMouseMove = ({ clientX, clientY }) => {
      // Actualizar el estado con las nuevas coordenadas
      setCoords({ x: clientX, y: clientY });
    }

    // Agregar un evento de escucha al movimiento del mouse
    window.addEventListener('mousemove', onMouseMove);

    // Limpiar el evento de escucha cuando el componente se desmonta
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []); // El arreglo de dependencias vacío indica que este efecto se ejecuta solo una vez al montar el componente


  // Renderizar el componente
  return (
    <>
      {/* Título del mensaje */ }
      <h3>Usuario ya existe</h3>

      {/* Mostrar las coordenadas actuales (solo para propósitos de demostración) */ }
      { JSON.stringify(coords) }
    </>
  );
}
