import Button from "./components/Button";
import Card, {CardBody} from "./components/Card";
import ListOnClick from "./components/List"
import ListState from "./components/ListState";

function App() {
  const list = ["Aitana", "Carlos", "Unrotundo"];

  const handleSelect = (element: string) => {
    console.log("imprimiendo", element);
  };

  //En caso de que queramos mostrar que no hay elementos en la lista se hará con un ternario
  const contentListState = list.length 
    ? <ListState data={list} onSelect= {handleSelect} />
    : 'Sin elementos en la lista';

  //En caso de que no queramos mostrar nada cuando no hay elementos en la lista se hará con SortCircuitOperator
  const contentListState2 = list.length !== 0 && <ListState data={list} onSelect= {handleSelect} />;

  return (
    <>
      <Card>
        <CardBody title= "Título" text = "Texto"/>
        <ListOnClick data={list} />
        {contentListState}
        {/* {contentListState2} */}
        <Button>Click Me</Button>
      </Card>
    </>
  );
}

export default App;
