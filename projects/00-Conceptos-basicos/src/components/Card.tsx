import type { ReactNode } from "react"; //Importación del tipo ReactNode para poder pasarle como children un componente

// Props del componente Card: recibe children para renderizar contenido anidado
interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;

  return (
    <div className="card" style={{ width: "350px" }}>
      <div className="card-body">
        {children /* Aquí se renderiza cualquier componente hijo, p.ej. <CardBody /> */}
      </div>
    </div>
  );
}
export default Card; // Export por defecto: se importa sin llaves (import Card from "...")

interface CardBodyProps {
  title: string;  // título que se muestra en la tarjeta
  text: string; // texto o descripción que acompaña al título
}

// CardBody es un named export: se importa con llaves (import { CardBody } from "...")
// Es un componente pensado para usarse dentro de <Card> como hijo.
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;

  return (
    //Forma acortada de crear un ReactFragment (permite agrupar una lista de elementos hijos sin añadir un nodo extra (<div>))
    <> 
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

