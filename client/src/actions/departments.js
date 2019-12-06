import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setDepartments = (departments) => {
    return { type: 'SET_DEPARTMENTS', payload: departments }
}

export const startSetDepartments = () => {
    return (dispatch) => {
        axios.get('/departments', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then(response => {
                const departments = response.data
                dispatch(setDepartments(departments))
            })
    }
}

export const addDepartment = (department) => {
    return { type: 'ADD_DEPARTMENT', payload: department }
}

export const startAddDepartment = (formData, props) => {
    return (dispatch) => {
        axios.post('/departments', formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then(response => {
                if (response.data.hasOwnProperty('erors')) {
                    alert(response.data.message)
                } else {
                    const department = response.data
                    dispatch(addDepartment(department))
                    props.history.push('/departments')
                }
            })
    }
}

export const editDepartment = (department, id) => {
    return { type: 'EDIT_DEPARTMENT', payload: { department, id } }
}

export const startEditDepartment = (formData, id, props) => {
    return (dispatch) => {
        axios.put(`/departments/${id}`, formData, {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then(response => {
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    const department = response.data
                    dispatch(editDepartment(department, id))
                    props.history.push('/departments')
                }
            })
    }
}

export const deleteDepartment = (id) => {
    return { type: 'DELETE_DEPARTMENT', payload: id }
}

export const startDeleteDepartment = (id) => {
    return (dispatch) => {
        axios.get('/tickets', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then(response => {
                if (response.data.find(ticket => ticket.department._id == id)) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ticket is available can not delete department'
                    })
                }
                else {
                    axios.get('/employees', {
                        headers: {
                            'x-auth': localStorage.getItem('authToken')
                        }
                    })
                        .then(response => {
                            const employee = response.data.find(emp => emp.department._id == id)
                            if (employee) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Employee is available can not delete department'
                                })
                            } else {
                                Swal.fire({
                                    title: 'Are You sure?',
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Yes, delete it!'
                                }).then((result) => {
                                    if (result.value) {
                                        axios.delete(`/departments/${id}`, {
                                            headers: {
                                                'x-auth': localStorage.getItem('authToken')
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.hasOwnProperty('errors')) {
                                                    alert(response.data.message)
                                                } else {
                                                    dispatch(deleteDepartment(id))
                                                    Swal.fire({
                                                        position: 'center',
                                                        icon: 'success',
                                                        title: 'Customer deleted Successfully',
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                    })
                                                    setTimeout(() => {
                                                        window.location.reload()
                                                    }, 1500);
                                                }
                                            })
                                    }
                                })
                            }
                        })
                }
            })

    }
}