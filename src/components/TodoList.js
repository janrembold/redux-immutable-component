import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import ImmutablePropTypes from "react-immutable-proptypes";

const TodoList = ({ todos, toggleTodo }) => (
  <div>
    <h3>With onClick method</h3>
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.get("id")}
          todo={todo}
          onClick={() => toggleTodo(todo.get("id"))}
        />
      ))}
    </ul>
    <h3>Without onClick method</h3>
    <ul>
      {todos.map(todo => (
        <Todo key={todo.get("id")} todo={todo} />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: ImmutablePropTypes.list.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
