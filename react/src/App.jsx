import Sock from "./components/Sock";
import sock_data from './assets/sock.json';
import Footer from "./components/Footer";
import Search from "./components/Search"
import Featured from "./components/Featured";
import promo_data from "./assets/promo.json"
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./components/About"
import AddSock from "./components/AddSock"


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_SOCKS_API_URL);
        if (!response.ok) {
          throw new Error("Data could not be fetched!");
        }
        const json_response = await response.json();
        setData(json_response); // assign JSON response to the data variable.
      } catch (error) {
        console.error("Error fetching socks:", error);
      }
    };
    fetchData();
  }, []);

  const handleAdd = async () => {
    try {
      //console.log({sockId})
      // Make an API request to delete the sock with the given sockId
      const response = await fetch(
        `${import.meta.env.VITE_SOCKS_API_URL}/socks`,
        {
          method: "POST",
        },
      );
      if (!response.ok) {
        throw new Error("Sock could not be added!");
      }
      
    }
    catch (error) {
      console.error("Error adding sock:", error);
    }
  }

  const handleDelete = async (sockId) => {
    try {
      //console.log({sockId})
      // Make an API request to delete the sock with the given sockId
      const response = await fetch(
        `${import.meta.env.VITE_SOCKS_API_URL}/${sockId}`,
        {
          method: "DELETE",
        },
      );
      if (!response.ok) {
        throw new Error("Sock could not be deleted!");
      }
      // Update the state or fetch the updated data from the server
      const updatedData = data.filter((sock) => sock._id !== sockId); // Removethe deleted sock from the data array
      setData(updatedData); // Update the state with the updated data
    } catch (error) {
      console.error("Error deleting sock:", error);
    }
  };
  
  
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TSE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bstoggle="collapse"
            data-bs-target="#navbarSupportedContent"
            ariacontrols="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle
navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>;

              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/addSock">
                Add Sock
              </Link>;

              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <Search setData={setData} />

          </div>
        </div>
      </nav>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <div className="container-fluid">
          <div className="row">
            Both socks and space rockets will take you to new heights, but only
            one will get cold feet!
            < Featured props={promo_data}  />
            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap:'20px' }}>
            </div>
            <Routes>
              <Route
                exact
                path="/"
                element={<Home data={data} handleDelete={handleDelete} />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/addSock" element={<AddSock />} />
              
            </Routes>;

            <Footer environment={import.meta.env.VITE_ENVIRONMENT} />
          </div>
        </div>
      </main>
    </Router>
  );
}
export default App;
