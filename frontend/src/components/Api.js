import React, { Component } from 'react'
export class Api extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="api-title">Api overview </h1>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-9">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Request</th>
                                    <th scope="col">URL</th>
                                    <th scope="col">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Api overview</th>
                                    <td>GET</td>
                                    <td>http://127.0.0.1:8000/library/</td>
                                    <td><a href="http://127.0.0.1:8000/library/">Api overview</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">Get all books</th>
                                    <td>GET</td>
                                    <td>http://127.0.0.1:8000/library/books/</td>
                                    <td><a href="http://127.0.0.1:8000/library/books/">Get all books</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">Get book</th>
                                    <td>GET</td>
                                    <td>http://127.0.0.1:8000/library/book/(id)</td>
                                    <td>X</td>
                                </tr>
                                <tr>
                                    <th scope="row">Delete book</th>
                                    <td>DELETE</td>
                                    <td>http://127.0.0.1:8000/library/delete-book/(id)</td>
                                    <td>X</td>
                                </tr>
                                <tr>
                                    <th scope="row">Create book</th>
                                    <td>POST</td>
                                    <td>http://127.0.0.1:8000/library/create-book/</td>
                                    <td><a href="http://127.0.0.1:8000/library/create-book/">Create book</a></td>
                                </tr>
                                <tr>
                                    <th scope="row">Update book</th>
                                    <td>POST</td>
                                    <td>http://127.0.0.1:8000/library/create-book/(id)</td>
                                    <td>X</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col"></div>
                </div>
               
            </div>
        )
    }
}

export default Api
