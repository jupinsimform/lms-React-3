import { useEffect, useRef, useState } from "react";
import { Task, ListItemsProps } from "../Types/Type";

function ListItems(props: ListItemsProps): JSX.Element {
  const [iscompleted, setisCompleted] = useState<boolean>(props.completed);
  const checkBox = useRef<HTMLInputElement>(null);

  const handleChange = (): void => {
    if (checkBox.current !== null) {
      const isChecked = checkBox.current.checked;
      setisCompleted(isChecked);
      const data: Task[] = JSON.parse(localStorage.getItem("tasklist")!);

      // toggle completed property
      const newData: Task[] = data.map((currentData: Task) => {
        if (currentData.id === props.id) {
          return { ...currentData, completed: isChecked };
        } else {
          return currentData;
        }
      });

      // sort data according to completed
      function sortItem() {
        return function (a: Task, b: Task) {
          if (a.completed) {
            return -1;
          } else {
            return 1;
          }
        };
      }
      newData.sort(sortItem());
      props.getArray(newData);
      localStorage.setItem("tasklist", JSON.stringify(newData));
    }
  };

  return (
    <>
      <div className="lists" key={props.id}>
        <p className={"items" + (iscompleted ? " items-gray" : " items-black")}>
          {props.text}
        </p>
        <input
          type="checkbox"
          className="check"
          ref={checkBox}
          checked={iscompleted}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default ListItems;
