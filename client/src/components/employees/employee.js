import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import { startSetEmployees } from '../../actions/employees'

class Employee extends React.Component {
    constructor() {
        super() 
        this.state={
            employees:[]
        }
    }
    componentDidMount() {
        this.props.dispatch(startSetEmployees())
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__340.jpg"+")",height:"100vh"}}>
        <div className="container">
            <br/>
            <h1 className="text-center">EMPLOYEES</h1>
                    <div className="row">
                        <div className="col-md-3">
                        <Link to="/employees/new"><Button className="primary">ADD EMPLOYEE</Button></Link><br/><br/>
                        </div>
                    </div>
                    <div className="row">
                        {this.props.employees.map((emp)=>{
                            return <div className="col-md-3 text-center" key={emp._id}>
                            <Card border="primary" style={{backgroundColor:'#FFF1D4'}}>
                             <Card.Header>{emp.name}</Card.Header>
                             <Card.Body>
                                 <Card.Text>
                                    <p>DEPARTMENT:{emp.department.name}<br/>
                                    EMAIL:{emp.email}<br/>
                                    MOBILE:{emp.mobile}</p>
                                 </Card.Text>
                             </Card.Body>
                             <Card.Footer>
                             <Link to={`/employees/show/${emp._id}`}><Button>SHOW</Button></Link><span> </span>
                             <Link to={`/employees/edit/${emp._id}`}><Button>EDIT</Button></Link>
                             </Card.Footer>
                            </Card><br/>
                            </div>
                        })}
                        </div>
                        </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=> {
    return {
        employees:state.employees
    }
}
export default connect(mapStateToProps)(Employee)