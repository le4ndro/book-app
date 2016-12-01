import React, { Component } from 'react';

class Hello extends Component {
    render() {
        return (
            <p>Olá ! {this.props.name} </p>
        );
    }
}

export default Hello;