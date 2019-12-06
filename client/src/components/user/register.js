import React from 'react'
import {startRegisterUser} from '../../actions/user'
import {connect} from 'react-redux'
import {Form,Button,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Register extends React.Component {
    constructor() {
        super()
        this.state={
            username:'',
            email:'',
            password:'',
            passwordAlert:''
        }
    }
   
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
        console.log(this.state)
    }
    submitHandler=(e)=>{
        e.preventDefault()
        
    const formData={
        username:this.state.username,
        email:this.state.email,
        password:this.state.password
    }
    console.log(formData)
    let passwd = this.state.password
        const reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,128}$/;
        let test = reg.test(passwd)
        if (test) {
        this.props.dispatch(startRegisterUser(formData,{...this.props}))
        } else {
            this.setState({passwordAlert:'password must contain upperCase,lowerCase,number and special character'})
        }
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2015/01/01/23/55/telephone-586266_960_720.jpg"+")","height":600}}>
                <div className="row">
                 <div  className="col-md-4 offset-md-8"><br/><br/>
                 <Card style={{background:'#C0C0C0',height:'410px' ,width:'320px'}} className="shadow p-3 mb-5 rounded">
                <h1 className="text-center">REGISTER</h1>
                <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="formBasicUser">
                <Form.Label>UserName</Form.Label>
                 <Form.Control type="text" value={this.state.username} name="username" onChange={this.handleChange} required placeholder="Enter Username" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" value={this.state.email} name="email" onChange={this.handleChange} required placeholder="Enter Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                 <Form.Control type="password" value={this.state.password} name="password" onChange={this.handleChange} required placeholder="Enter Password" />
                <Form.Text>{this.state.passwordAlert}</Form.Text>
                </Form.Group>
                <div className="text-center"><Button variant="primary" size="lg" block  type="submit">
                    Submit
                </Button></div>
                <p className="text-center"><Link to="/users/login">Already have an account ? Login Here</Link></p>
                </Form>
                </Card>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default connect()(Register)