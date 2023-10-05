const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={style.todoItem}>
      <input
        type="checkbox"
        style={style.checkbox}
        onChange={() => {
          toggleCompleted(todo.id);
        }}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button style={style.button} onClick={() => deleteTodo(todo.id)}>
        X
      </button>
    </div>
  );
};

const style = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: {
    marginLeft: "10px",
    height: "18px",
    width: "18px",
  },
  button: {
    marginRight: "10px",
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default TodoItem;
