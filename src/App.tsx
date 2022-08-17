import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  useEffect(() => {
    const listener = (event: any) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        if (todo === "") {
          alert("Preencha os campos!");
        } else {
          alert("Teste");
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [todo]);

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
        </div>
      </main>
    </>
  );
}

export default App;
