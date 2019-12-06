import React from 'react'
import {connect} from 'react-redux'
import {Card,Button,Form} from 'react-bootstrap'
import { startSetDepartments } from '../../actions/departments'

class EmployeeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name:props.employee ? props.employee.name :'',
            email:props.employee ? props.employee.email :'',
            mobile:props.employee ? props.employee.mobile :'',
            department:props.employee ? props.employee.department :'',
        }
    }
    componentDidMount() {
        this.props.dispatch(startSetDepartments())
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile,
            department:this.state.department
        }
        this.props.submitHandler(formData)
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__340.jpg"+")",height:"100vh"}}>
        <div className="container"><br/>
                 <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <Card style={{background:'#BE9D65'}} className="shadow p-3 mb-5 rounded">
                    <h1 className="text-center">EMPLOYEE FORM</h1>
                <Form onSubmit={this.submitHandler}> 
                <Form.Group controlId="formBasicName">
                        <Form.Label>NAME:</Form.Label>
                        <Form.Control type="text" value={this.state.name} name='name' onChange={this.handleChange} required placeholder="Enter Employee Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" value={this.state.email} name="email" onChange={this.handleChange} required placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                        <Form.Label>MOBILE:</Form.Label>
                        <Form.Control type="text" value={this.state.mobile} name="mobile" onChange={this.handleChange} required placeholder="Enter mobile No" />
                        </Form.Group>
                    <Form.Group controlId="formbasiccategory">
                    <Form.Label>DEPARTMENT</Form.Label>
                    <Form.Control as="select" value={this.state.department} name="department" onChange={this.handleChange}>
                            <option>SELECT HERE</option>
                            {this.props.departments.map(department=>{
                                return <option key={department._id} value={department._id}>{department.name}</option>
                            })}
                    </Form.Control>
                    </Form.Group><br/>
                    <div className="text-center"><Button variant="secondary" size="lg" block  type="submit">
                    Submit
                </Button></div>
                </Form>
                </Card>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=> {
    return {
        departments:state.departments
    }
}
export default connect(mapStateToProps)(EmployeeForm)