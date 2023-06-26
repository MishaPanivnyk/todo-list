import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length === 0) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Head>
        <title>My Todo List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">My Todo List</h1>

        <div className="input-container">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button className="delete-button" onClick={() => removeTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        Powered by Next.js
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f0f0f0;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        .input-container {
          display: flex;
          margin-top: 2rem;
        }

        input[type="text"] {
          padding: 0.5rem 1rem;
          font-size: 1.5rem;
          border-radius: 0.25rem;
          border: none;
          flex-grow: 1;
        }

        button {
          padding: 0.5rem 1rem;
          font-size: 1.5rem;
          border-radius: 0.25rem;
          border: none;
          margin-left: 1rem;
          background-color: #0070f3;
          color: white;
          cursor: pointer;
        }

        .task-list {
          list-style-type: none;
          padding: 0;
          margin-top: 2rem;
        }

        li {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .delete-button {
          background-color: #f44336;
          margin-left: 1rem;
        }

        footer {
          margin-top: auto;
          padding: 1rem;
          text-align: center;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}
