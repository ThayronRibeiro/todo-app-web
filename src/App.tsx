import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";

let task: Task[] = [
  { title: "teste", finally: false },
  { title: "teste 2", finally: false },
];

type Task = {
  title: string;
  finally: boolean;
};

function App() {
  const [todo, setTodo] = useState("");
  const [taskFinally, setTaskFinally] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value.toUpperCase());
  };

  const handlePushTask = () => {
    task.push({
      title: todo,
      finally: true,
    });
    setTodo("");
  };

  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        if (todo === "") {
          alert("Preencha os campos!");
        } else {
          // alert(`Teste: ${todo}`);
          task.push({
            title: todo,
            finally: true,
          });
          setTodo("");
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [todo, task]);

  const handleFinally = () => {
    setTaskFinally(!taskFinally);
    return console.log("teste");
  };

  return (
    <>
      <main>
        <h1>ToDo ReactJS</h1>
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
            {task.map((item, index) => (
              <div
                className="taskRow"
                onClick={() => {
                  item.finally = false;
                }}
                key={index}
              >
                <li className={item.finally ? "finallyTask" : ""}>
                  {item.title}
                </li>
                {/* <button onClick={handleFinally}>Finalizar</button> */}
              </div>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
