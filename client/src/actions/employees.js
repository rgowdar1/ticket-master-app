import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setEmployees=(employees)=> {
    return {type:'SET_EMPLOYEES',payload:employees}
}

export const startSetEmployees=()=> {
    return (dispatch)=> {
        axios.get('/employees',{
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const employees=response.data
            dispatch(setEmployees(employees))
        })
    }
}

export const addEmployee=(employee)=> {
    return {type:'ADD_EMPLOYEE',payload:employee}
}

export const startAddEmployee=(formData,props)=> {
    return (dispatch)=> {
        axios.post('/employees',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                Swal.fire(response.data.message)
            } else {
                const employee=response.data
                dispatch(addEmployee(employee))
                props.history.push('/employees')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Employee added Successfully',
                    showConfirmButton: false,
                    timer: 1500
            })
            }
        })
    }
}

export const editEmployee=(employee,id)=> {
    return {type:'EDIT_EMPLOYEE',payload:{employee,id}}
}

export const startEditEmployee=(formData,id,props)=> {
    return (dispatch)=> {
        axios.put(`/employees/${id}`,formData,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                const employee=response.data
                dispatch(editEmployee(employee,id))
                props.history.push('/employees')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Employee Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
            })
            }
        })
    }
}

export const deleteEmployee=(id)=> {
    return {type:'DELETE_EMPLOYEE',payload:id}
}

export const startDeleteEmployee=(id,props)=> {
    return (dispatch)=> {
        Swal.fire({
            title:'Are You sure?',
            icon:'warning',
            showCancelButton:true,
            confirmButtonColor:'#3085d6',
            cancelButtonColor:'#d33',
            confirmButtonText:'Yes, delete it!'
        }).then((result)=> {
            if(result.value) {
        axios.delete(`/employees/${id}`,{
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                dispatch(deleteEmployee(id))
                props.history.push('/employees')
            }
        })
    }
})
    }
}