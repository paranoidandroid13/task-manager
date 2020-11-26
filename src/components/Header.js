import React, { useState } from 'react'
import logo from './assets/img/logo.svg'
import './Header.css'

const Header = () => {
  const [searchValue, setSearchValue] = useState('')
  const onChange = e => {
    setSearchValue(e.target.value)
  }

  const taskState = ['unstarted', 'in progress', 'completed']
  const renderTaskList = () => {

  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container pt-3">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" />{" "}
            </a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  profile <span class="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  calendar
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  settings
                </a>
              </li>
            </ul>

            {/* <form className="form-inline  my-2 my-lg-0">
              <input
                className="form-control rounded-0 mr-sm-2"
                type="search"
                placeholder="search"
                aria-label="Search"
                value={searchValue}
                onChange={onChange}
              />
            </form> */}
            <ul className="navbar-nav mr-left mt-2 mt-lg-0">
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header
