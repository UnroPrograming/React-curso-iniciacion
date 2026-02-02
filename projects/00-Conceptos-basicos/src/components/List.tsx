// Tipo de las props que recibe el componente.
// Aquí indicamos que recibirá un array de strings llamado `data`.
type Props = {
  data: string[];
};

// Componente funcional llamado List.
// Recibe las props y hacemos destructuring para obtener `data` directamente.
function ListOnClick({ data }: Props) {
  // Función que se ejecuta cuando el usuario hace click en un elemento de la lista.
  // Recibe el elemento clickeado como parámetro y lo imprime en la consola.
  const handleClick = (e: string) => {
    console.log(e);
  };

  return (
    // `ul` con clases de Bootstrap para estilos.
    <ul className="list-group">
      {data.map((element) => (
        // Cada elemento renderizado necesita una key única para que React pueda
        // identificar cambios, añadir y eliminar elementos eficientemente.
        // Usamos el string `element` como key porque asumimos que los valores son únicos.
        <li
          // Evento onClick que se ejecuta cuando el usuario hace click en el item.
          // Pasamos una función anónima para poder pasar el parámetro `element`.
          onClick={() => handleClick(element)}
          key={element}
          className="list-group-item"
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

// Exportamos el componente para poder usarlo desde otros archivos.
export default ListOnClick;
