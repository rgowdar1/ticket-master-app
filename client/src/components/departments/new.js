import React from 'react'
import {connect} from 'react-redux'
import DepartmentForm from '../departments/form'
import { startAddDepartment } from '../../actions/departments'

class DepartmentNew extends React.Component  {
    submitHandler=(formData)=>{
        this.props.dispatch(startAddDepartment(formData,this.props))
    }
    render() {
        return (
            <div>
                    <DepartmentForm submitHandler={this.submitHandler}/>
            </div>
        
        )
    }
}
export default connect()(DepartmentNew)