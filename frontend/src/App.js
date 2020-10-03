import React, { Component } from 'react'
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook'
import Header from './components/Header'
import Api from './components/Api'
export class App extends Component {
  
  render() {
    

    return (

        <Router>
          <Route  path="/"  component={Header}/>
          <Route exact path="/"  component={Dashboard}/>
          <Route exact path="/api"  component={Api}/>
          <Route exact path="/add-book"  component={AddBook}/>
          <Route exact path="/edit-book/:id"  component={EditBook}/>
        </Router>
        
    )

  }
}

export default App
