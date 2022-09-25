import "../css/index.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import Button from "react-bootstrap/esm/Button";
import nextBtn from "../img/next.png";
import quesson from "../img/qession.png";
import dc from '../img/documet.docx'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useCallback, useState } from "react";
import axios from '../utils/axios.js'

function ViewSingleProjectAdmin(){
    const [app, setApp] = useState(null)
    const [sore, setSore] = useState(null)
    const params = useParams()
    const fetchPost = useCallback(async () => {
        const {data} = await axios.get(`/applications/${params.id}`)
        setApp(data.application)
    },[params.id])
    useEffect(() => {
        fetchPost()
    }, [])
    const scores = useCallback(async () => {
        const data = await axios.get(`/aapplications/${params.id}`)
        console.log(data.data.scores[0]);
        setSore(data.data.scores[0])
        // console.log(dataa);
        // console.log(data.application);
    },[params.id])
    useEffect(() => {
        scores()
    }, [])
    if (!app){
        return <h1>asdda</h1>
    }
    return (
        <>
            <div class='row conteiner'>
                <div className="col-9">
                    <Navbar bg="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-start" id="basic-navbar-nav">
                        <Nav className="header-navbar">
                            <Nav.Link href="/juri">&nbsp;Main&nbsp;</Nav.Link>
                            <Nav.Link href="#link">&nbsp;Seach&nbsp;</Nav.Link>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                            <Nav className="header-navbar">
                                <Nav.Link href="#link">Juri</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar.Collapse>
                    </Navbar>
                    <Container>
                        {/* {console.log(app)} */}
                        
                        <h1>{app.title}</h1>
                        <h6>Date:25.09.22&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tag: 2565</h6>
                        <br/>
                        <h5>{app.text}</h5>
                        <br/>
                        <br/>
                        <br/>
                        <a href={dc} download><button>docunet.dox</button></a>

                        {/* <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        value={scoreActual}
                        onChange={(e)=> setScoreActual(e.target.value)}
                        placeholder="Оценак за вариативность"></input>
                        <input type="text" class="form-control" id="exampleInputEmail1" 
                        value={scoreIdea}
                        onChange={(e)=> setScoreIdea(e.target.value)}
                        aria-describedby="emailHelp" placeholder="Оценак за мяу муя муя"></input> */}
                        <h4>Оценка за актуальность : {sore.scoreActual}</h4>
                        <h4>Оценка за идею : {sore.scoreIdea}</h4>
                        <h4>Оценка за способность реализации : {sore.scoreRealisation}</h4>
                        {/* <Button variant="lite" onClick={(e) => {
                            // e.preventDefault();
                            // console.log(scoreIdea, scoreActual, scoreRealisation);
                            // window.location.href='/juri/view-all-projects';
                            SaveScore()
                            }} className='nextbtn' type="submit">
                            <img className='nextImg' src={nextBtn}/>
                        </Button> */}
                    </Container>
                </div>
                <div className="col-2 right">
                <div className='right'>
                    <a href='#'><img src={quesson} className='qessionBtn'/></a>
                </div>
                </div>
            </div>
        </>
    )
}

export default ViewSingleProjectAdmin