export function TodoList({ todos }) {
    return(
    <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo =>{
      return (
      <TodoList
      <li key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.completed} onChange={e => togleTodo(todo.id, e.target.cheked)}/>
       {todo.title}
      </label>
      <button onClick={() => deleteTodos(todo.id)} className="btn btn-danger">Delete</button>
    </li>
      )
    })}
  </ul>
    )
}