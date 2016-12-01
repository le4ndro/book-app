import React from 'react';
import Axios from 'axios';

class ListBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }; 
    }
    componentDidMount() {
        Axios.get('http://localhost:8080/api/books')
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                this.setState({books: response.data._embedded.books})
            });
    }
    render () {
        return (
            <div>
                <h2>Lista de Livros</h2>
                {this.state.books.map((book) =>
                    <p><b>Título:</b>{book.title} <b>Autor:</b>{book.author} </p> 
                )} 
            </div>
        );
    }
}

export default ListBooks;