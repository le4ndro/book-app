import React from 'react';
import Axios from 'axios';

class FormBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
        }; 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAuthorChance = this.handleAuthorChance.bind(this);
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }
    handleAuthorChance(event) {
        this.setState({author: event.target.value});
    }
    handleSubmit(event) {    

        var data = {
            title: this.state.title,
            author: this.state.author 
        }

        Axios.post('http://localhost:8080/api/books', data)
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
                <h2>Novo Livro</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                    </label>
                    <br/><br/>
                    <label>
                        Author:
                        <input type="text" value={this.state.author} onChange={this.handleAuthorChance} />
                    </label>
                    <br/><br/>
                    <input type="submit" name="" value="Save" />
                </form>
            </div>
        );
    }
}

export default FormBooks;