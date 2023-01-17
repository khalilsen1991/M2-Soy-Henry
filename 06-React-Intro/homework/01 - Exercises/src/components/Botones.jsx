import React from "react";

export default class Botones extends React.Component{
    render() {
        /* console.log(this.props.alerts); */
        /* const alertas = this.props.alerts; */
        return (
            <div>
                <button onClick={() => window.alert(this.props.alerts.m1)}>Módulo 1</button>
                <button onClick={() => window.alert(this.props.alerts.m2)}>Módulo 2</button>
            </div>
        )
    }
}