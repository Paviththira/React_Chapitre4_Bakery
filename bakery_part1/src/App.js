
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Onglet from './Onglet';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "Add"

    }
  }
  onClick = (e) => {
    this.setState({ selectedTab: e.target.name })
  }


  render() {
    return (

      <div>
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
      </div>

    )
  }
}
export default App;