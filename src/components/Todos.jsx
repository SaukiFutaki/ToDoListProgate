import TodoItem from "./TodoItem";

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
