import { useState } from "react";

// Definimos los tipos de propiedad que se le van a pasar al componente
// En este caso:
//      Un array con los nombres que se incluirán en la lista
//      Una función que se ejecutará al pulsar un nombre de la lista
type Props = {
  data: string[];
  onSelect?: (element: string) => void; //La ? -> Indica que ese parámetro es voluntario
};

function ListState({ data, onSelect}: Props) {
  
  //Utilizamos un estado para avisar a react que esa variable va a cambiar y que tiene que actualizar la UI 
  const [indexSelected, setIndexSelected]= useState();

  //Al pulsar un elemento de la lista -> el indexSeleced pasa a ser ese elemento
  const handleClick = (i: number, element: string) => {
    setIndexSelected(i);
    onSelect?.(element); //el ?. -> Indica que solo se ejecutará el método si no es Undefined
  };

  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          onClick={() => handleClick(i, element)}
          key={i}
          //Cuando seleccionamos un elemento de la lista este pasa a tener la propiedad de boostrap active
          className={`list-group-item ${indexSelected == i ? 'active' : ''}`}
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default ListState;


// IMPORTANTE => Este código no funcionará porque indexSelected no se actualiza.
//                      Para que se actualice es necesario utilizar un State como hacemos arriba
// function ListState({ data }: Props) {
//   let indexSelected = 1;

//   //Al pulsar un elemento de la lista -> el indexSeleced pasa a ser ese elemento
//   const handleClick = (i: number) => {
//     indexSelected = i;
//   };

//   return (
//     <ul className="list-group">
//       {data.map((element, i) => (
//         <li
//           onClick={() => handleClick(i)}
//           key={element}
//           //Cuando seleccionamos un elemento de la lista este pasa a tener la propiedad de boostrap active
//           className={`list-group-item ${indexSelected == i ? 'active' : ''}`}
//         >
//           {element}
//         </li>
//       ))}
//     </ul>
//   );
// }
