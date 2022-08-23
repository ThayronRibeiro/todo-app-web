import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";
import { v4 as uuid } from "uuid";

type Task = {
  id: string;
  title: string;
  finally: boolean;
};

function App() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value.toUpperCase());
  };

  const handlePushTask = () => {
    if (todo === "") {
      alert("Preencha os campos!");
    } else {
      tasks.push({
        id: uuid(),
        title: todo,
        finally: false,
      });
      setTodo("");
    }
  };

  const handleFinally = (id: string) => {
    tasks.map((item) => {
      if (item.id === id) {
        item.finally = !item.finally;
        const tempTask = [...tasks];
        setTasks(tempTask);
      }
    });
  };

  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        if (todo === "") {
          alert("Preencha os campos!");
        } else {
          tasks.push({
            id: uuid(),
            title: todo,
            finally: false,
          });
          setTodo("");
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [todo, tasks, handleFinally]);

  return (
    <>
      <main>
        <div className="header">
          <h1>TODO</h1>
        </div>
        <div className="cardInputArea">
          <input
            id="todoInput"
            type="text"
            value={todo}
            onChange={handleInputChange}
            placeholder="Digite uma tarefa para ser adicionada..."
          />
          <button onClick={handlePushTask}>Incluir</button>
        </div>

        <div className="taskList">
          <ul>
            {tasks.map((item, index) => (
              <div
                className={item.finally ? "taskRowFinally" : "taskRow"}
                onClick={() => handleFinally(item.id)}
                key={index}
              >
                <li className={item.finally ? "finallyTask" : ""}>
                  {item.title}
                </li>
                {/* <button onClick={() => handleFinally(item.id)}>
                  Finalizar
                </button> */}
              </div>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
