import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {NavLink, Link} from "react-router-dom";


export function Header(){
    return(
        <Navbar expand="md" className="fixed-top" id="navbar">
            <Navbar.Brand className="text-white" id="media">
            <Link to="/home" className="logo"><h4><span className="fa fa-space-shuttle"></span> AI-Powered Website</h4></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="media"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{fontSize:"1.1rem"}}>
                    <NavLink className="text-white" to="/home"><span className="fa fa-home"></span> Home</NavLink>
                    <NavLink className="text-white" to="/blogs"><span className="fa fa-book"></span> Blogs</NavLink>
                    <NavLink className="text-white" to="/feedback"><span className="fa fa-comments"></span> Feedback</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}