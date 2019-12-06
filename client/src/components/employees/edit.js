import React from 'react'
import {connect} from 'react-redux'
import EmployeeForm from '../employees/form'
import { startEditEmployee } from '../../actions/employees'
import {startSetSingleEmployee} from '../../actions/singleEmployee'

class EmployeeEdit extends React.Component {
    constructor() {
        super()
        this.state={
            employee:{}
        }
    }
        componentDidMount() {
            const id=this.props.match.params.id
           this.props.dispatch(startSetSingleEmployee(id))
    }
    submitHandler=(formData)=>{
        const id=this.props.match.params.id
        this.props.dispatch(startEditEmployee(formData,id,this.props))
    }
    render() {
        return (
            <div>
                <h1>EDIT FORM</h1>
                {Object.keys(this.props.employee).length!==0 && <EmployeeForm employee={this.props.employee} submitHandler={this.submitHandler}/>}
            </div>
        )
    }
}
const mapStateToProps=(state)=> {
    return {
        employee:state.singleEmployee
    }
}
export default connect(mapStateToProps)(EmployeeEdit)