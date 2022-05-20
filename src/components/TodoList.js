import React from "react";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = { listItem: "" };
  }

  todoItemHandler = (event) => {
    this.setState({ listItem: event.target.value });
  };
  onSubmitHandler = (e) => {
    e.preventDefault();
    const item = {
      listItem: this.state.listItem,
      id: Math.random().toString(),
    };

    this.props.onSave(item);
    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            value={this.state.listItem}
            onChange={this.todoItemHandler}
          />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}

export default TodoList;

