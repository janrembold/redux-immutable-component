import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";

class Todo extends PureComponent {
  constructor(props) {
    super(props);
    this.renderCount = 0;
  }

  render() {
    const { onClick, todo } = this.props;
    const addClick = onClick ? { onClick } : {};
    this.renderCount++;

    return (
      <li
        {...addClick}
        style={{
          textDecoration: todo.get("completed") ? "line-through" : "none"
        }}
      >
        {todo.get("id")} - {todo.get("text")} (
        {`RenderCount=${this.renderCount}`})
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func,
  todo: ImmutablePropTypes.contains({
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number
  }).isRequired
};

export default Todo;
