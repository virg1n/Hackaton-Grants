import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/viewAllProjects.css"

function UserProjectsPage(){
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-start" id="basic-navbar-nav">
                    <Nav className="header-navbar">
                        <Nav.Link href="/user">&nbsp;Main&nbsp;</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="header-navbar">
                        <Nav.Link className="bord" href="#link">User</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="wrap">
            <div class="search">
                <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
                <button type="submit" class="searchButton">
                    <i class="fa fa-search"></i>
                </button>
            </div>
            </div>
            <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/user/viewSingleProject';
                    }} type="button" class='project'>
                <div className='line'/>
                <h1>Project:NAme1</h1>
                <h4>Date: 24.09.22</h4>
                <div className='line'/>
            </button>
            {/* <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/juri/viewSingleProject';
                    }} type="button" class='project'>
                <div className='line'/>
                <h1>Project:NAme2</h1>
                <h4>Tag: 2565 Date: 24.09.22</h4>
                <div className='line'/>
            </button> */}
            {/* <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href='/juri/viewSingleProject';
                    }} type="button" class='project'>
                <div className='line'/>
                <h1>Project:NAme3</h1>
                <h4>Tag: 2565 Date: 24.09.22</h4>
                <div className='line'/>
            </button> */}
        </>
    )
}

export default UserProjectsPage