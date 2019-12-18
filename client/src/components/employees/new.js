import React from 'react'
import EmployeeForm from '../employees/form'
import { startAddEmployee } from '../../actions/employees'

export default class EmployeeNew extends React.Component {

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