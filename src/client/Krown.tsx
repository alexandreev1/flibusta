import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "./images/logo.png";

const Krown = () => {

    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt="logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {" Flibusta"}
            </Navbar.Brand>
        </Navbar>
    );
};

export default Krown;
