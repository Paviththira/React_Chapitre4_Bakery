import React from "react";
import Button from 'react-bootstrap/Button';


class Onglet extends React.Component {
    render() {
        return (

            <div>
                <Button
                    variant={this.props.isSelected ? "primary" : "light"}
                    onClick={this.props.onClickFunction}
                    name={this.props.name}>
                    {this.props.name}
                </Button>
            </div >






        );
    };
}
export default Onglet;