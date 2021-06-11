import React from "react";


const minPrice = 1;
const maxPrice = 10

class Add extends React.Component {

    constructor() {
        super();
        this.state = {
            productName: "",
            price: 1

        }
    }
    updateProductName = (e) => {
        this.setState({ productName: e.target.value })

    }

    updatePrice = (e) => {
        this.setState({ price: e.target.value })

    }

    sendData = () => {

        if (this.state.productName && this.state.price) {
            this.props.addItemFunction(this.state.productName, this.state.price);
            this.setState({ productName: "", price: 1 });

        }
        else {
            alert("please enter product name");
        }
    }
    render() {
        return (
            <div>
                <div className="input-group mb-3 mt-3" >
                    <input type="text"
                        className="form-control"
                        placeholder="item"
                        onChange={this.updateProductName}
                        value={this.state.productName} />
                    <button
                        className="input-group-text btn btn-primary"
                        id="basic-addon2"
                        onClick={this.sendData}>
                        Add
                    </button>
                </div>
                <div>
                    {this.state.price}€

                </div>

                <div>

                    <input
                        type="range"
                        id="price"
                        name="price"
                        value={this.state.price}
                        min={minPrice}
                        max={maxPrice}
                        onChange={this.updatePrice}
                        style={{ width: "100%" }} />
                </div>
            </div>

        )
    }
}
export default Add