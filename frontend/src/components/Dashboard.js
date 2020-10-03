import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css'
export class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state={
        books:[]
    }

    this.fetchBooks= this.fetchBooks.bind(this)
    this.deleteBook = this.deleteBook.bind(this)


  }
  componentDidMount(){
    this.fetchBooks()
  }
  deleteBook = (pk)=>{
    if(window.confirm("Do you really want to delete this book?")){
      axios.defaults.xsrfCookieName = 'csrftoken'
      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
      axios.delete(`http://127.0.0.1:8000/library/delete-book/${pk}/`)
      .then((response) =>{
        this.fetchBooks()
      })
    }

  }
  fetchBooks = ()=>{
    axios.get('http://127.0.0.1:8000/library/books/')
    .then(res=>{
      this.setState({books:res.data});
    })
  }

  render() {
    const {books} = this.state

    return (

    <div className="container-fluid">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="row">
        <div className="col"></div>
        <div className="col-9">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                {books.map(book=> 

                  <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    <td><Link className="btn btn-primary" to={`/edit-book/${book.id}`}>Edit</Link></td>
                    <td><button onClick={()=>this.deleteBook(book.id)} type="button" className="btn btn-danger">Delete</button></td>
                  </tr>
                )}
            </tbody>
          </table>
          <Link to="/add-book"className="btn btn-success btn-save" >Add Book</Link>
        </div>
        <div className="col"></div>
      </div>
    </div>
    )

  }
}

export default Dashboard