import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './tailwind.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Form from './Views/Form'
import Photo from './Views/Photo'

function App() {
  return ( 
    <div>
      <Router>
        <Header />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/photos/:id">
              <Photo />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
