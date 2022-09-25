import Form from 'react-bootstrap/Form';
import '../css/createProgect.css'
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
import nextBtn from "../img/next.png";
import quesson from "../img/qession.png";
import crest from '../img/crest.png';
import axios from '../utils/axios.js'
import { toast } from 'react-toastify'
import "../css/may.css"


class CreateProjectPage extends Component{
    constructor(props){
        super(props)
        this.state={
            projectname:'',
            descride:''
        }
        this.changeprojectnameHandler=this.changeprojectnameHandler.bind(this);
        this.changedescrideHandler=this.changedescrideHandler.bind(this);
        // this.changefileeHandler=this.changefileeHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }
    changeprojectnameHandler=(event)=>{
        this.setState({projectname: event.target.value});
    }
    changedescrideHandler=(event)=>{
        this.setState({descride: event.target.value});
    }
    // sendInf = async (params) =>{
    //     try {
    //         const {data} = await axios.post('/user/application', params)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    async saveStudent(e){
        // e.preventDefault();
        let fromData={
            title: this.state.projectname,
            text: this.state.descride
        };
        console.log(fromData);
        await axios.post('/user/application', fromData)
        
        // console.log('Student=>'+JSON.stringify(fromData));
        // const isValid = await userScema.isValid(fromData);
        // console.log(isValid);
        // if(isValid && this.state.password===this.state.repitpassword) axios.post("http://127.0.0.1:3001/user/registration",JSON.stringify(fromData)).then(data=> console.log(data));
    }
    render(){
        return(
            <>
            <a className="close" href='/userMain'><img src={crest} alt='asdas'/>&nbsp;&nbsp;Create Project</a>
            <div className='may'>
            <a class="close" href='/userMain'><img src={crest} alt='asdas'/>&nbsp;&nbsp;Create Project</a>
                <Form className='col-8 py-4'>
                    <Form.Group className="mb-3 py-4" controlId="formGroupEmail">
                        <Form.Control size="lg" value={this.state.projectname} onChange={this.changeprojectnameHandler} type="text" placeholder="Enter your project name" />
                        <div className="line"></div>
                    </Form.Group>
                    <Form.Group className="mb-3 " controlId="formGroupPassword">
                        <Form.Control size="lg" value={this.state.descride} onChange={this.changedescrideHandler} as="textarea" rows={1} className='createprocet' type="text" placeholder="Description for project" />
                        <div className="line"></div>
                    </Form.Group>
                    {/* <div className='menu py-5'>
                        <Form.Group className='frame' controlId="formFileLg">
                            <Form.Control onChange={this.changefileeHandler} type="file"/>
                        </Form.Group>
                        <div className='frame px-5'>You can add some docx and other documents</div>
                    </div> */}
                    {/* <div key={'default-checkbox'} className="mb-3">
                        <Form.Check 
                            type={'checkbox'}
                            id={`default-checkbox`}
                            label={`You confirm with our Terms`}
                        />
                    </div> */}
                    <Button variant="lite" className='nextbtn' onClick={(e) => {
                        this.saveStudent()
                        e.preventDefault();
                        window.location.href='/userMain';
                        alert("ваша Заявка отправленна")
                    }} type="submit">
                        <img className='nextImg' src={nextBtn}/>
                    </Button>
                </Form>
                <div className='right'>
                    <a href='#'><img src={quesson} className='qessionBtn'/></a>
                </div>
                </div>
            </>
        )
    }
}

export default CreateProjectPage;