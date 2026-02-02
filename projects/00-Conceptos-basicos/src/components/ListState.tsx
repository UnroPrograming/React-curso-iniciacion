import { useState } from "react";

type Props = {
  data: string[];
};

function ListState({ data }: Props) {
  
  //Utilizamos un estado para avisar a react que esa variable va a cambiar y que tiene que actualizar la UI 
  // (por defecto el valor será 1)
  const [indexSelected, setIndexSelected]= useState(1);

  //Al pulsar un elemento de la lista -> el indexSeleced pasa a ser ese elemento
  const handleClick = (i: number) => {
    setIndexSelected(i);
  };

  return (
    <ul className="list-group">
      {data.map((element, i) => (
        <li
          onClick={() => handleClick(i)}
          key={element}
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
