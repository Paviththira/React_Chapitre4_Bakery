import React from "react";


class List extends React.Component {
    emptyBlock = () => {
        return <h2>NO PRODUCT ADDED </h2>

    }
    listView = () => {
        return <div>
            <ol className="list-group list-group-numbered">
                {this.props.list.map(function (value, key) {
                    return <li className="list-group-item d-flex justify-content-between align-items-start" key={key}>
                        <div className="ms-2 me-auto">
                            {value.name}
                        </div>
                        <span className="badge bg-primary rounded-pill">{value.price}€</span>
                    </li>;
                })}
            </ol>
        </div>

    }

    render() {
        return (
            <div>
                {this.props.list.length > 0 ? this.listView() : this.emptyBlock()}
            </div>
        )
    }
}
export default List

