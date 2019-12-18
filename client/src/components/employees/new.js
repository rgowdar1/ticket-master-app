import React from 'react'
import EmployeeForm from '../employees/form'
import { startAddEmployee } from '../../actions/employees'
import {connect} from 'react-redux'

class EmployeeNew extends React.Component {

    submitHandler=(formData)=>{
        this.props.dispatch(startAddEmployee(formData,this.props))
    }
    render() {
        return (
            <div>
                <EmployeeForm submitHandler={this.submitHandler}/>
            </div>
        )
    }
}

export default connect()(EmployeeNew)