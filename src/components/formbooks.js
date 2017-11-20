import React from 'react';
import Axios from 'axios';

class FormBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            autor: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTituloChange = this.handleTituloChange.bind(this);
        this.handleAutorChance = this.handleAutorChance.bind(this);
    }
    handleTituloChange(event) {
        this.setState({titulo: event.target.value});
    }
    handleAutorChance(event) {
        this.setState({autor: event.target.value});
    }
    handleSubmit(event) {

        var data = {
            titulo: this.state.titulo,
            autor: this.state.autor
        }

        var url = 'http://localhost:3000/api/livros';

        Axios.post(url, data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    }
    render () {
        return (
            <div>
                <h2>New Book</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" value={this.state.titulo} onChange={this.handleTituloChange} />
                    </label>
                    <br/><br/>
                    <label>
                        Author:
                        <input type="text" value={this.state.autor} onChange={this.handleAutorChance} />
                    </label>
                    <br/><br/>
                    <input type="submit" name="" value="Save" />
                </form>
            </div>
        );
    }
}

export default FormBooks;
