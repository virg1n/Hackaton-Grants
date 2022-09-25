import "../css/index.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import Button from "react-bootstrap/esm/Button";
import nextBtn from "../img/next.png";
import quesson from "../img/qession.png";
import dc from '../img/documet.docx'
import "../css/may.css"

function ViewSingleProjectUser(){
    return (
        <>
        <div className="may">
            <div class='row conteiner'>
                <div className="col-9">
                    <Navbar bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-start" id="basic-navbar-nav">
                        <Nav className="header-navbar">
                            <Nav.Link href="/userMain">&nbsp;Main&nbsp;</Nav.Link>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                            <Nav className="header-navbar">
                                <Nav.Link href="#link">User</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar.Collapse>
                    </Navbar>
                    <Container>
                        <h1>Name</h1>
                        <h6>Date:24.09.22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tag: 2565</h6>
                        <br/>
                        <h5>Привет</h5>
                        <br/>
                        <br/>
                        <br/>
                        <a href={dc} download><button>docunet.dox</button></a>
                    </Container>
                </div>
                <div className="col-2 right">
                <div className='right'>
                    <a href='#'><img src={quesson} className='qessionBtn'/></a>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ViewSingleProjectUser

