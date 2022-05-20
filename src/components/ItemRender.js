import React from "react";

class ItemRender extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul>
        {this.props.onNewData.map((item) => (
          <li key={item.id}>{item.listItem} <button id={item.id} onClick={this.props.onDelete}>Delete</button></li>
        ))}

      </ul>
    );
  }
}

export default ItemRender;
