import "./App.css";

import TodoList from "./components/TodoList";
import ItemRender from "./components/ItemRender";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inicialState: [],
    };
  }

  saveTodoItems = (item) => {
    this.setState({ inicialState: [item, ...this.state.inicialState] });
    console.log(this.state.inicialState);
  };

  deleteItems = (e) => {
   this.setState({inicialState: this.state.inicialState.filter((el) => {
    if (el.id !== e.target.id) {
      return [el];
    }
  }) })
  };

  render() {
    return (
      <div className="App">
        <TodoList onSave={this.saveTodoItems} />
        <ItemRender
          onNewData={this.state.inicialState}
          onDelete={this.deleteItems}
        />
      </div>
    );
  }
}

export default App;
