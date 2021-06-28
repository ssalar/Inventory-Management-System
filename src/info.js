import React from "react";

class Info extends React.Component {
    render() {
        const title = "Inventory System";
        const showTitle = true;
        return(
        <div>
        <h1>{showTitle ? title : ""}</h1>
        <p>Manage Your stuff.</p>
        </div>
        )
    }
}

export default Info;