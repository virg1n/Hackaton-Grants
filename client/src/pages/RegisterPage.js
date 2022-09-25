import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../css/createProgect.css'
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import nextBtn from "../img/next.png";
import quesson from "../img/qession.png";
import crest from '../img/crest.png';
import axios from '../utils/axios.js'

class RegisterPage extends Component{
    constructor(props){
        super(props)
        this.state={
            fullname:'',
            IIN:'',
            email:'',
            number:'',
            password:'',
            repas:''
        }
        this.changefullnameHandler=this.changefullnameHandler.bind(this);
        this.changeIINHandler=this.changeIINHandler.bind(this);
        this.changeemailHandler=this.changeemailHandler.bind(this);
        this.changenumberHandler=this.changenumberHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.changerepasHandler=this.changerepasHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }
    changefullnameHandler=(event)=>{
        this.setState({fullname: event.target.value});
    }
    changerepasHandler=(event)=>{
        this.setState({repas: event.target.value});
    }
    changeIINHandler=(event)=>{
        this.setState({IIN: event.target.value});
    }
    changeemailHandler=(event)=>{
        this.setState({email: event.target.value});
    }
    changenumberHandler=(event)=>{
        this.setState({number: event.target.value});
    }
    changePasswordHandler=(event)=>{
        this.setState({password: event.target.value});
    }
    async saveStudent(e){
        // e.preventDefault();
        let fromData={
            FIO: this.state.fullname,
            IIN: this.state.IIN,
            email: this.state.email,
            number: this.state.number,
            password: this.state.password
        };
        console.log(fromData);
        const {data} = await axios.post('/user/registration', {
            FIO: this.state.fullname,
            IIN: this.state.IIN,
            email: this.state.email,
            number: this.state.number,
            password: this.state.password
        })
        window.localStorage.setItem('token', data.token)
        // const isValid = await userScema.isValid(fromData);
        // console.log(isValid);
        // if(isValid && this.state.password===this.state.repitpassword) axios.post("http://127.0.0.1:3001/user/registration",JSON.stringify(fromData)).then(data=> console.log(data));
    }
    render(){
        return(
            <>  
            <Container>
                <a class="close" href='/'><img src={crest} alt='asdas'/>&nbsp;&nbsp;Registration</a>
                <div className='col-8 py-4'>
                    <Form.Group className="mb-3 py-2" controlId="formGroupEmail">
                        <Form.Control size="lg" value={this.state.fullname} onChange={this.changefullnameHandler} type="text" placeholder="Enter your full name" />
                        <div class="line"></div>
                    </Form.Group>
                    <Form.Group className="mb-3 py-2" controlId="formGroupPassword">
                        <Form.Control size="lg" value={this.state.IIN} onChange={this.changeIINHandler} type="text" placeholder="Enter your IIN" />
                        <div class="line"></div>
                    </Form.Group>
                    <Form.Group className="mb-3 py-2" controlId="formGroupPassword">
                        <Form.Control size="lg" value={this.state.email} onChange={this.changeemailHandler} type="text" placeholder="Enter your email" />
                        <div class="line"></div>
                    </Form.Group>
                    <Form.Group className="mb-3 py-2" controlId="formGroupPassword">
                        <Form.Control size="lg" value={this.state.number} onChange={this.changenumberHandler} type="text" placeholder="Enter your phone number" />
                        <div class="line"></div>
                    </Form.Group>
                    <Form.Group className="mb-3 py-2" controlId="formGroupPassword">
                        <Form.Control size="lg" value={this.state.password} onChange={this.changePasswordHandler} type="password" placeholder="Enter your password" />
                        <div class="line"></div>
                    </Form.Group>
                    <Form.Group className="mb-3 py-2" controlId="formGroupPassword">
                        <Form.Control size="lg" value={this.state.repas} onChange={this.changerepasHandler} type="password" placeholder="Repeat password" />
                        <div class="line"></div>
                    </Form.Group>
                    <div key={'default-checkbox'} className="mb-3">
                        <Form.Check 
                            type={'checkbox'}
                            id={`default-checkbox`}
                            label={`Были ли у вас гранты?`}
                        />
                    </div>
                    <div key={'default-checkbox'} className="mb-3">
                        <Form.Check 
                            type={'checkbox'}
                            id={`default-checkbox2`}
                            label={`Индивидуальные предприниматели до 3 лет`}
                        />
                    </div>
                    <Button onClick={(e) => {
                        this.saveStudent()
                        // e.preventDefault();
                        window.location.href='/userMain';
                    }} variant="lite" className='nextbtn'>
                        <img className='nextImg' src={nextBtn}/>
                    </Button>
                </div>
            <div className='right'>
                <a href='#'><img src={quesson} className='qessionBtn'/></a>
            </div>
            </Container>
        </>
        )
    }
}

export default RegisterPage