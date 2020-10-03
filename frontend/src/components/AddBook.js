import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'
import {Link} from 'react-router-dom'
export class AddBook extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
             title: "",
             author:"",
             price: 0,
        }
    }

    changeHandler = (e) =>{
        this.setState( {[e.target.name]: e.target.value} )
    }
    submitHandler = (e) =>{
        e.preventDefault()
        axios.defaults.xsrfCookieName = 'csrftoken'
        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
        axios.post('http://127.0.0.1:8000/library/create-book/',this.state)
        .then(res=>{
            this.props.history.push('/')
        })
      
    }

    

  render() {
        const {title,author,price}= this.state

    return (
        <div className="container">
            <h1 className="dashboard-title">Add Book</h1>
            <div className="row">
                <div className="form">
                    <form onSubmit={this.submitHandler} >
                        <div>
                            <label>Title:</label><input className="form-control" type="text" name="title"value={title} onChange={this.changeHandler} />
                        </div>
                        <div>
                            <label>Author:</label><input className="form-control" type="text" name="author" value={author} onChange={this.changeHandler}/>
                        </div>
                        <div>
                            <label>Price:</label><input className="form-control" type="number" name="price" value={price} onChange={this.changeHandler}/>
                        </div>
                        <div className="row">
                                <div className="col">
                                    <button className="btn btn-success btn-save" type="submit">Add Book</button>
                                </div>
                                <div className="col">
                                    <Link to="/" className="btn btn-info btn-back" type="submit">Back</Link>
                                </div>  
                        </div>
                    </form>
                </div>
            </div>
        </div>
            
    )

  }
}

export default AddBook
