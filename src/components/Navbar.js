import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/user';


export default function Navbar() {
  const { user, isAuth } = useSelector((state) => state.userReducer)
  const [search, setSearch] = useState("");
  const dispatch = useDispatch()


  function chng(event) {
    setSearch(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logout())
  }

  return (

    <>
      <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">CoinCap</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">About</Link>
              </li>
              {isAuth &&
              <>
              <li className="nav-item">
              <Link className="nav-link active" to="/wallet-connect">WalletConnect</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/portfolio">Portfolio</Link>
            </li>
            </>
             }
               
          
              {!isAuth &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/signup">Register</Link>
                  </li>
                </>
              }
              {isAuth &&
                <li className="nav-item">
                  <span className="nav-link active" onClick={handleSubmit} >Logout</span>
                </li>
              }

            </ul>
            <form className="d-flex">
              <input className="form-control me-2" onChange={chng} type="search" placeholder="Search" aria-label="Search" />
              <Link to={"/Search"} state={{ name: search }}>

                <button className="btn btn-outline-warning" type="submit">Search</button>
              </Link>
            </form>
          </div>
        </div>
      </nav>



    </>
  )
}
