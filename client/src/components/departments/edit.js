import React from 'react'
import axios from '../../config/axios'
import DepartmentForm from '../departments/form'

export default class DepartmentEdit extends React.Component {
    constructor() {
        super()
        this.state={
            department:{}
        }
    }
    componentDidMount() {
        const id=this.props.match.params.id
        axios.get(`/departments/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const department=response.data
            this.setState({department})
        })
        .catch((err)=>{
            alert(err)
        })
    }
    submitHandler=(formData)=>{
        const id=this.props.match.params.id
        axios.put(`/departments/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                this.props.history.push('/departments')
            }
        })
    }
    render() {
        return (
            <div>
                {Object.keys(this.state.department).length!==0 && <DepartmentForm department={this.state.department} submitHandler={this.submitHandler}/>}
            </div>
        )
    }
}