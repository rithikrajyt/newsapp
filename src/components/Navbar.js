import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsUpdates</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="/features">Features</a></li>
        <li className="nav-item"><a className="nav-link" href="/features">business</a></li>
        <li className="nav-item"><a className="nav-link" href="/features">entertainment</a></li>
        <li className="nav-item"><a className="nav-link" href="/features">general</a></li>
        <li className="nav-item"><a className="nav-link" href="/features">health</a></li>
        <li className="nav-item"><a className="nav-link" href="/features">science</a></li>
        <li className="nav-item"><a className="nav-link" href="/features">sports</a></li>
        <li className="nav-item"><a className="nav-link" href="/features">technology</a></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar