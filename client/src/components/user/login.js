import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startLoginUser} from '../../actions/user'
import {Form,Button,Card} from 'react-bootstrap'

class Login extends React.Component {
    constructor() {
        super()
        this.state={
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submithandler=(e)=>{
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        this.props.dispatch(startLoginUser(formData,this.props))
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2015/01/01/23/55/telephone-586266_960_720.jpg"+")","height":600}}>
                <div className="row">
                <div  className="col-md-4 offset-md-8"><br/>
                <Card style={{background:'#C0C0C0',height:'330px' ,width:'320px'}} className="shadow p-3 mb-5 rounded">
                <h1 className="text-center">LOGIN</h1>
                <Form onSubmit={this.submithandler}>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" value={this.state.email} name="email" onChange={this.handleChange} required placeholder="Enter Email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                 <Form.Control type="password" value={this.state.password} name="password" onChange={this.handleChange} required placeholder="Enter Password" />
                </Form.Group>
                <div className="text-center"><Button variant="primary" size="lg" block type="submit">
                    Submit
                </Button></div>
                <p className="text-center"><Link to="/users/register">Don't have an account ? Register Here</Link></p>
                </Form>
                </Card>
                    </div>
                   <br/><br/><br/>
                </div>
                
            </div>
        )
    }
}

export default connect()(Login)