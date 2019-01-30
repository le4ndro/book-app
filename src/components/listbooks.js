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
        var url = 'http://localhost:3001/api/livro';
        Axios.get(url)
            .then((response) => {
                console.log(response.data);
                console.log(response.status);
                this.setState({books: response.data})
            });
    }

    deleteBook(id) {
        var url = 'http://localhost:3001/api/livro/' + id;

        Axios.delete(url)
        .then(function (response) {
            console.log(response.data);
            console.log(response.status);
            location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render () {
        return (
            <div>
                <h2>Book List</h2>
                {this.state.books.map((book) =>
                    <p>
                        <b>Title:</b>{book.titulo}
                        <b>Author:</b>{book.autor}
                        <button type="button"
                                onClick={this.deleteBook.bind(this, book._id)}>
                                Delete
                        </button>
                    </p>
                )}
            </div>
        );
    }
}

export default ListBooks;
