
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Onglet from './Onglet';
import Add from "./Component/Add";
import List from "./Component/List";
import Pay from "./Component/Pay";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "Add",
      item: []

    }
  }
  onClick = (e) => {
    this.setState({ selectedTab: e.target.name })
  }

  addItem = (name, price) => {
    let item = {};
    item.name = name;
    item.price = price;
    this.state.item.push(item);
    console.log(this.state.item);

  }
  listItem() {

  }

  render() {
    return (

      <div className='container'>
        <h2>SP Bakery</h2>
        <div class="btn-group" role="group" aria-label="Basic example">
          <Onglet
            name="Add"
            isSelected={this.state.selectedTab === "Add"}
            onClickFunction={this.onClick}></Onglet>
          <Onglet
            name="List"
            isSelected={this.state.selectedTab === "List"}
            onClickFunction={this.onClick}></Onglet>
          <Onglet
            name="Pay"
            isSelected={this.state.selectedTab === "Pay"}
            onClickFunction={this.onClick}></Onglet>
        </div>
        {this.state.selectedTab === "Add" && <Add addItemFunction={this.addItem} />}
        {this.state.selectedTab === "List" && <List list={this.state.item} />}
        {this.state.selectedTab === "Pay" && <Pay />}

      </div>

    )
  }
}
export default App;