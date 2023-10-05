import Todos from "./components/Todos";
import { useState } from "react";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   title: "Finish Progate React Course",
    //   completed: false,
    // },
    // {
    //   id: 2,
    //   title: "Have lunch with Guru Domba",
    //   completed: false,
    // },
    // {
    //   id: 3,
    //   title: "Study React with Ninja Ken",
    //   completed: false,
    // },
  ]);
  console.log(todos);
  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updateTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(updateTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === "") {
      return;
    }

    const newTodo = {
      // id: todos.length + 1,
      id: todos.length ? todos[todos.length - 1].id + 1 : 0,
      title: todoTitle,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    // const updatedTodos = todos.concat(newTodo);
    // setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>

      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

const styles = {
  container: {
    width: "auto",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "48px",
  },
};

export default App;
