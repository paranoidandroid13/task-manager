import React from 'react'
import logo from './assets/img/logo.svg'
import './Header.css'

const Header = () => {
  return (
    // <header>
    //   <nav className="navbar navbar-expand-md fixed-top border bg-primary py-4">
    //     <div className="container ">
    //       <div className="row w-100">
    //         <div className="col-xl-2">
    //           <a className="navbar-brand" href="#">
    //             <img src={logo} alt="" />
    //           </a>
    //         </div>
    //         <div className="collapse navbar-collapse px-0" id="navbarCollapse">
    //           <div className="col-xl-9 border">
    //             <div className="row pl-4">
    //               <div className="col-xl-2 px-0">profile</div>
    //               <div className="col-xl-2 px-0">profile</div>
    //               <div className="col-xl-2 px-0">profile</div>
    //             </div>
    //           </div>
    //           <div className="col-xl-3 m-0 pl-5">
    //           <form className="form-inline mt-2 mt-md-0">
    //             <input
    //               className="form-control mr-sm-2 rounded-0"
    //               type="text"
    //               placeholder="search..."
    //               aria-label="Search"
    //             ></input>
    //           </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </header>

    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container py-3">
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
            <form className="form-inline  my-2 my-lg-0">
              <input
                className="form-control rounded-0 mr-sm-2"
                type="search"
                placeholder="search"
                aria-label="Search"
              />
            </form>
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
