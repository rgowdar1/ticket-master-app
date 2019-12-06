import React from 'react'
import {connect} from 'react-redux'
import {Form, Button, Card} from 'react-bootstrap'
import { startSetCustomers } from '../../actions/customers'
import { startSetDepartments } from '../../actions/departments'

class TicketForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            code:props.ticket ? props.ticket.code : '',
            customer:props.ticket ? props.ticket.customer : '', 
            department:props.ticket ? props.ticket.department : '', 
            priority:props.ticket ? props.ticket.priority : '', 
            message:props.ticket ? props.ticket.message : ''
        }
    }

    resetHandler=()=>{
        this.setState({
            code:'',
            customer:'',
            department:'',
            priority:'',
            message:''
        })
    }

    submitHandler=(e)=>{
        e.preventDefault()
        const formData={
            code:this.state.code,
            customer:this.state.customer,
            department:this.state.department,
            priority:this.state.priority,
            message:this.state.message
        }
        this.props.submitHandler(formData)
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidMount() {
        this.props.dispatch(startSetCustomers())
        this.props.dispatch(startSetDepartments())
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__340.jpg"+")",height:"100vh"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                    <Card style={{background:'#C0C0C0',height:'660px'}} className="shadow p-3 mb-5 rounded">
                    <Form onSubmit={this.submitHandler}>
                    <h1>TICKET FROM</h1>
                    <Form.Group controlId="formBasicCode">
                    <Form.Label>CODE:</Form.Label>
                    <Form.Control type="text" value={this.state.value} name="code" onChange={this.handleChange} placeholder="Enter Code" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCustomer">
                    <Form.Label>CUSTOMER:</Form.Label>
                    <Form.Control as="select" value={this.props.customer} name='customer' onChange={this.handleChange}>
                    <option>SELECT HERE</option>
                            {this.props.customers.map((cust)=>{
                                return <option key={cust._id} value={cust._id}>{cust.name}</option>
                    })}
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicDepartment">
                    <Form.Control as="select" value={this.props.department} name="department" onChange={this.handleChange}>
                    <option>SELECT HERE</option>
                    {this.props.departments.map(department=>{
                                return <option key={department._id} value={department._id}>{department.name}</option>
                            })}
                    </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicPriority">
                    <Form.Label>PRIORITY:</Form.Label>
                    <div class="radio">
                    <label><input type="radio" name="priority" onChange={this.handleChange} value="high"/>HIGH</label>
                    </div>
                    <div class="radio">
                    <label><input type="radio" name="priority" onChange={this.handleChange} value="medium"/>MEDIUM</label>
                    </div>
                    <div class="radio">
                    <label><input type="radio" name="priority" onChange={this.handleChange} value="low"/>LOW</label>
                    </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage">
                    <Form.Label>MESSAGE:</Form.Label>
                    <Form.Control as="textarea" value={this.state.message} name="message" onChange={this.handleChange} rows="3" />
                    </Form.Group><br/>
                    <div className="text-center"><Button type="submit">SUBMIT</Button>  <Button type="reset" onClick={this.resetHandler}>RESET</Button></div>
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
        customers:state.customers,
        departments:state.departments
    }
}
export default connect(mapStateToProps)(TicketForm)