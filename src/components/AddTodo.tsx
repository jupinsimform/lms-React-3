import React, { useRef, useState, useEffect } from "react";
import { Task, AddTodoProps } from "../Types/Type";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { generate } from "short-uuid";

function AddTodo({ getArray }: AddTodoProps): JSX.Element {
  const [task, setTask] = useState<Task>({
    id: "",
    text: "",
    completed: false,
    creatAt: "",
  });
  const [inputText, setInputText] = useState<string>("");
  const [tasklist, setTasklist] = useState<Task[]>([]);
  const buttonElementRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const alldeleteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const data = localStorage.getItem("tasklist");

    if (data) {
      const storeItem: Task[] = JSON.parse(data);
      setTasklist(storeItem);
      getArray(storeItem);

      // filter data from local Storage using date property
      const currentDate = new Date().toLocaleDateString("en-US");
      const updatedData = storeItem.filter((currentData: Task) => {
        if (currentData?.creatAt === currentDate) {
          return currentData;
        }
      });
      localStorage.setItem("tasklist", JSON.stringify(updatedData));
    }
  }, [task]);

  useEffect(() => {
    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // handle click on + button to hide +button and show input field
  const handleClick = () => {
    if (buttonElementRef.current && inputRef.current && alldeleteRef.current) {
      buttonElementRef.current.style.display = "none";
      inputRef.current.style.display = "block";
      alldeleteRef.current.style.display = "block";
      inputRef.current.focus();
    }
  };

  // press esc key + button will be shown and input field will be hide
  const handleKeyDown = (evt: KeyboardEvent) => {
    if (
      evt.key === "Escape" &&
      buttonElementRef.current &&
      inputRef.current &&
      alldeleteRef.current
    ) {
      buttonElementRef.current.style.display = "block";
      inputRef.current.style.display = "none";
      alldeleteRef.current.style.display = "none";
      setInputText("");
    }
  };

  // store inputText into LocalStorage with id,date and completed Property
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedTaskList: Task[] = [];
    if (inputText == "") {
      toast.warn("Please Enter a Task first!", {
        position: toast.POSITION.TOP_CENTER,
        transition: Slide,
        autoClose: 450,
      });
    } else if (inputText == "delete" || inputText == "DELETE") {
      setTask({
        id: "",
        text: "",
        completed: false,
        creatAt: "",
      });
      toast.error("Task List Cleared", {
        position: toast.POSITION.TOP_LEFT,
        transition: Slide,
        autoClose: 450,
      });
      setInputText("");
      setTasklist(updatedTaskList);
      localStorage.setItem("tasklist", JSON.stringify(updatedTaskList));
    } else {
      setTimeout(() => {
        const todoListDom = document.getElementById("main-list")!;
        todoListDom.scrollTo(0, todoListDom.scrollHeight + 20);
      }, 50);

      toast.success("Task added Successfully", {
        position: toast.POSITION.TOP_RIGHT,
        transition: Slide,
        autoClose: 500,
      });
      const date = new Date();
      setTask({
        id: "",
        text: "",
        completed: false,
        creatAt: "",
      });

      updatedTaskList.push(...tasklist, {
        id: generate(),
        text: inputText,
        completed: false,
        creatAt: date.toLocaleDateString("en-US"),
      });
      setTasklist(updatedTaskList);

      localStorage.setItem("tasklist", JSON.stringify(updatedTaskList));

      setInputText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Add Task"
          ref={inputRef}
          value={inputText}
          maxLength={23}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="delete-task" ref={alldeleteRef}>
          Write delete to remove all task
        </div>
        <button type="submit" className="hide"></button>
      </form>
      <button className="addtodo" ref={buttonElementRef} onClick={handleClick}>
        +
      </button>
      <ToastContainer />
    </div>
  );
}

export default AddTodo;
