import "../css/mainPage.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import React from "react";

function MainPageJuri() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-start" id="basic-navbar-nav">
                    <Nav className="header-navbar">
                        <Nav.Link href="#home">&nbsp;Main&nbsp;</Nav.Link>
                        <Nav.Link href="/juri/view-all-projects">&nbsp;Estimated by Me&nbsp;</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="header-navbar">
                        <Nav.Link className="bord" href="/juri/view-all-projects">
                            Juri 3
                        </Nav.Link>
                        <Nav.Link href="/">Log out</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="mian-container">
                <img src="img/logo.png" alt="asdas"/>
                <div class="h60"></div>
                <h2>Description and other things. I don’t know what should be there. Just some text without any meaning.</h2>
            </div>
        </>
    );
}

export default MainPageJuri;
