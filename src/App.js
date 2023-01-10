import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        < Navbar />
        <Routes>
          <Route exact path="/" element={< News key="general" country="in" category="general"/>}></Route>
          <Route exact path="/business" element={ < News key="business" country="in" category="business"/>}></Route>
          <Route exact path="/enterntainment" element={ < News key="enterntainment" country="in" category="enterntainment"/>}></Route>
          <Route path="/general" element={ < News key="general" country="in" category="general"/>}></Route>
          <Route exact path="/health" element={ < News key="health" country="in" category="health"/>}></Route>
          <Route exact path="/science" element={ < News key="science" country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={ < News key="sports" country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={ < News key="technology" country="in" category="technology"/>}></Route>
          </Routes>
       </BrowserRouter>
      </div>
    )
  }
}
