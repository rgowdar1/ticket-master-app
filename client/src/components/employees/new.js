import React from 'react'
import axios from '../../config/axios'
import EmployeeForm from '../employees/form'

export default class EmployeeNew extends React.Component {

    submitHandler=(formData)=>{
        axios.post('/employees',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                console.log(response.data)
                this.props.history.push('/employees')
                window.location.reload()
            }
        })
    }
    render() {
        return (
            <div>
                <EmployeeForm submitHandler={this.submitHandler}/>
            </div>
        )
    }
}