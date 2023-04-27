import { useState } from "react";
import Card from "./components/Card";
import Dates from "./components/Dates";
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import { Task } from "./Types/Type";
import "./App.css";

const App = (): JSX.Element => {
  const [data, setData] = useState<Task[]>([]);
  const getArray = (Arr: Task[]): void => {
    setData(Arr);
  };

  return (
    <>
      <Card>
        <Dates />
        <List gotData={data} getArray={getArray} />
        <AddTodo getArray={getArray} />
      </Card>
    </>
  );
};

export default App;
