import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import '../css/createProgect.css'
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import nextBtn from "../img/next.png";
import quesson from "../img/qession.png";
import crest from '../img/crest.png';
// import "../css/may.css"
class LoginPageAdmin extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
        }
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changePasswordHandler=this.changePasswordHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }
    changeEmailHandler=(event)=>{
        this.setState({email: event.target.value});
    }
    changePasswordHandler=(event)=>{
        this.setState({password: event.target.value});
    }
    async saveStudent(e){
        e.preventDefault();
        let fromData={
            email: this.state.email,
            password: this.state.password
        };
        console.log(fromData);
        console.log('Student=>'+JSON.stringify(fromData));
        // const {data} = await axios.post('/user/login', {
        //     email: this.state.email,
        //     password: this.state.password
        // })
        // window.localStorage.setItem('token', data.token)
        // console.log(data);
        // const isValid = await userScema.isValid(fromData);
        // console.log(isValid);
        // if(isValid && this.state.password===this.state.repitpassword) axios.post("http://127.0.0.1:3001/user/registration",JSON.stringify(fromData)).then(data=> console.log(data));
    }
    render(){
        return(
            <>  
            <Container>
                <a class="close" href='/'><img src={crest} alt='asdas'/>&nbsp;&nbsp;Login</a>
                <div className='col-8 py-4'>
                    <Form.Group className="mb-3 py-4" controlId="formGroupEmail">
                        <Form.Control size="lg" value={this.state.email} onChange={this.changeEmailHandler} className='createprocet' type="text" placeholder="Enter your email" />
                        <div class="line"></div>
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formGroupPassword">
                        <Form.Control size="lg" value={this.state.password} onChange={this.changePasswordHandler} className='createprocet' type="text" placeholder="Enter your password" />
                        <div class="line"></div>
                    </Form.Group>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href='/admin';
                        this.saveStudent();
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

export default LoginPageAdmin