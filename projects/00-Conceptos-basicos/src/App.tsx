import Card, {CardBody} from "./components/Card";
import ListOnClick from "./components/List"
import "./App.css";
import ListState from "./components/ListState";

function App() {
  const list = ["Aitana", "Carlos", "Unrotundo"];

  const handleSelect = (element: string) => {
    console.log("imprimiendo", element);
  };

  return (
    <>
      <Card>
        <CardBody title= "Título" text = "Texto"/>
        <ListOnClick data={list} />
        <ListState data={list} onSelect= {handleSelect} />
      </Card>
    </>
  );
}

export default App;
