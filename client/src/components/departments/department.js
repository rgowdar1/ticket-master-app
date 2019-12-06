import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button,Table} from 'react-bootstrap'
import {startSetDepartments,startDeleteDepartment} from '../../actions/departments'

class Department extends React.Component {
    
    removeHandler=(id)=>{
        this.props.dispatch(startDeleteDepartment(id))
    }
    componentDidMount() {
        this.props.dispatch(startSetDepartments())
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__340.jpg"+")",height:"100vh"}}>
        <div className="container">
        <h1 className="text-center">DEPARTMENTS</h1>
            <div className="row">
                <div className="col-md-3 offset-md-1">
                <Link to="/departments/new"><Button>ADD DEPARTMENT</Button></Link>
                </div>
            </div><br/><br/>
                
                
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EDIT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.departments.map((dept)=>{
                            return <tr key={dept._id}>
                                    <td>{dept.name}</td>
                                    <td><Link to={`departments/edit/${dept._id}`}><Button>EDIT</Button></Link></td>
                                    <td><Button onClick={()=>{
                                        this.removeHandler(dept._id)
                                    }}>DELETE</Button></td>
                            </tr>
                        })}
                    </tbody>
                </Table>
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

export default connect(mapStateToProps)(Department)
