import React, { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";
import { v4 as uuid } from "uuid";

import crossIcon from "./assets/images/icon-cross.svg";
import { Body } from "./StyledComponents/Body";

import { ButtonChange, ButtonContainer } from "./StyledComponents/ButtonChange";
import { ButtonChangeMode } from "./StyledComponents/ButtonChangeMode";
import { ContainerMain } from "./StyledComponents/ContainerMain";
import { HeaderImg } from "./StyledComponents/HeaderImg";
import { HeaderInfos } from "./StyledComponents/HeaderInfos";
import { Circle, InputArea, InputTodo } from "./StyledComponents/InputArea";
import { TasksArea } from "./StyledComponents/TasksArea";

type Task = {
  id: string;
  title: string;
  finally: boolean;
};

function App() {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showAll, setShowAll] = useState(true);
  const [showCompleted, setShowCompleted] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

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

  const handleEdit = (id: string, title: string) => {
    let inputTemp = prompt("Digite sua alteração na tarefa", `${title}`);
    tasks.map((item) => {
      if (item.id === id) {
        if (inputTemp != null) item.title = inputTemp.toUpperCase();
        const tempTask = [...tasks];
        setTasks(tempTask);
      }
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Confirma a exclução da tarefa?") == true) {
      const tempTask = tasks.filter((del) => del.id != id);
      setTasks(tempTask);
    }
  };

  const handleClearComplete = () => {
    const tempTask = tasks.filter((completed) => completed.finally != true);
    setTasks(tempTask);
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
      <Body darkMode={darkMode} />
      <HeaderImg darkMode={darkMode} />
      <ContainerMain>
        <HeaderInfos>
          <h1>TODO</h1>
          <ButtonChangeMode
            dark={darkMode}
            onClick={() => setDarkMode(!darkMode)}
          />
        </HeaderInfos>

        <InputArea>
          <Circle />
          <InputTodo
            type="text"
            placeholder="Create a new todo..."
            id="todoInput"
            value={todo}
            onChange={handleInputChange}
          />
        </InputArea>

        <TasksArea>
          {showAll ? (
            <ul>
              {tasks.map((item, index) => (
                <div
                  className={item.finally ? "taskRowFinally" : "taskRow"}
                  key={index}
                >
                  <li
                    className={item.finally ? "finallyTask" : ""}
                    onClick={() => handleFinally(item.id)}
                  >
                    {item.title}
                  </li>
                  <div className="options">
                    <span onClick={() => handleEdit(item.id, item.title)}>
                      Editar
                    </span>
                    <span onClick={() => handleDelete(item.id)}>Excluir</span>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <ul>
              {tasks.map((item, index) =>
                item.finally ? (
                  <div
                    className={item.finally ? "taskRowFinally" : "taskRow"}
                    key={index}
                  >
                    <li
                      className={item.finally ? "finallyTask" : ""}
                      onClick={() => handleFinally(item.id)}
                    >
                      {item.title}
                    </li>
                    <div className="options">
                      <span onClick={() => handleEdit(item.id, item.title)}>
                        Editar
                      </span>
                      <span onClick={() => handleDelete(item.id)}>Excluir</span>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </ul>
          )}
        </TasksArea>
      </ContainerMain>
      {/* <main>
        <div className="header">
          <h1>TODO</h1>
          {tasks.length}
        </div>
        <div className="cardInputArea">
          <input
            id="todoInput"
            type="text"
            value={todo}
            onChange={handleInputChange}
            placeholder="Digite uma tarefa para ser adicionada..."
          />
          <button type="button" onClick={handlePushTask}>
            Incluir
          </button>
        </div>

        <ButtonContainer>
          <ButtonChange
            onClick={() => {
              setShowAll(true);
              setShowCompleted(false);
            }}
            active={showAll ? true : false}
          >
            Teste
          </ButtonChange>
          <ButtonChange
            onClick={() => {
              setShowAll(false);
              setShowCompleted(true);
            }}
            active={showCompleted ? true : false}
          >
            Show Completed
          </ButtonChange>
          <ButtonChange onClick={handleClearComplete}>
            Clear Completed
          </ButtonChange>
        </ButtonContainer>

        <div className="taskList">
          {showAll ? (
            <ul>
              {tasks.map((item, index) => (
                <div
                  className={item.finally ? "taskRowFinally" : "taskRow"}
                  key={index}
                >
                  <li
                    className={item.finally ? "finallyTask" : ""}
                    onClick={() => handleFinally(item.id)}
                  >
                    {item.title}
                  </li>
                  <div className="options">
                    <span onClick={() => handleEdit(item.id, item.title)}>
                      Editar
                    </span>
                    <span onClick={() => handleDelete(item.id)}>Excluir</span>
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <ul>
              {tasks.map((item, index) =>
                item.finally ? (
                  <div
                    className={item.finally ? "taskRowFinally" : "taskRow"}
                    key={index}
                  >
                    <li
                      className={item.finally ? "finallyTask" : ""}
                      onClick={() => handleFinally(item.id)}
                    >
                      {item.title}
                    </li>
                    <div className="options">
                      <span onClick={() => handleEdit(item.id, item.title)}>
                        Editar
                      </span>
                      <span onClick={() => handleDelete(item.id)}>Excluir</span>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </ul>
          )}
        </div>
      </main> */}
    </>
  );
}

export default App;
