import "./App.css";
import ListGroup from "./compoement/ListGroup";
import Alert from "./compoement/Alert";
import Button from "./compoement/Button";
import { useState } from "react";

function App() {
  const items = ["paris", "toulouse", "Lille", "Nice", "Tunis", "bardo"];
  const handleSelect = (item: string) => {
    console.log(item);
  };
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibility && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          Hello
          <span> World</span>
        </Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        Clicked Me
      </Button>
      <ListGroup
        items={items}
        heading={"citiens"}
        onSelectItem={handleSelect}
      />
    </div>
  );
}

export default App;
