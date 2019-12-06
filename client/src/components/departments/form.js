import React from 'react'
import {Card,Form,Button} from 'react-bootstrap'

export default class DepartmentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name:props.department ? props.department.name : ''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        const formData={
            name:this.state.name
        }
        this.props.submitHandler(formData)
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__340.jpg"+")",height:"100vh"}}>
            <div className="container"><br/><br/>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <Card style={{background:'#C0C0C0',height:'260px'}} className="shadow p-3 mb-5 rounded">
                <h1 className="text-center">DEPARTMENT FORM</h1>
                <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                 <Form.Control type="text" value={this.state.name} name="name" onChange={this.handleChange} required placeholder="Enter Customer name" />
                </Form.Group><br/>
                <div className="text-center"><Button variant="primary" size="lg" block  type="submit">
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