export function TodoItem(completed, id, title) {
    return (
        <li>
        <label>
          <input type="checkbox" checked={completed} onChange={e => togleTodo(id, e.target.cheked)}/>
         {title}
        </label>
        <button onClick={() => deleteTodos(id)} className="btn btn-danger">Delete</button>
      </li>
    )
}