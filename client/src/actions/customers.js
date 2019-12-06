import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setCustomers=(customers)=> {
    return {type:'SET_CUSTOMERS',payload:customers}
}

export const startSetCustomers=()=> {
    return (dispatch)=> {
        axios.get('/customers',{
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const customers=response.data
            dispatch(setCustomers(customers))
        })
    }
}

export const addCustomer=(customer)=> {
    return {type:'ADD_CUSTOMER',payload:customer}
}

export const startAddCustomer=(formData,props)=> {
    return (dispatch)=> {
        axios.post('/customers',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('erors')) {
                alert(response.data.message)
            } else {
                const customer=response.data
                dispatch(addCustomer(customer))
                props.history.push('/customers')
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Customer Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                })
            }
        })
    }
}

export const editCustomer=(customer,id)=> {
    return {type:'EDIT_CUSTOMER',payload:{customer,id}}
}

export const startEditCustomer=(formData,id,props)=> {
    return (dispatch)=> {
        axios.put(`/customers/${id}`,formData,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                const customer=response.data
                dispatch(editCustomer(customer,id))
                props.history.push('/customers')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Customer Updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
            })
            }
        })
    }
}

export const deleteCustomer=(id)=> {
    return {type:'DELETE_CUSTOMER',payload:id}
}

export const startDeleteCustomer=(id,props)=> {
    return (dispatch)=> {
        axios.get('/tickets',{
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.find(ticket=>ticket.customer._id==id)) {
                Swal.fire({
                    icon:'error',
                    title:'Oops...',
                    text:'Ticket is available cant delete customer'
                })
            } else {
                Swal.fire({
                    title:'Are You sure?',
                    icon:'warning',
                    showCancelButton:true,
                    confirmButtonColor:'#3085d6',
                    cancelButtonColor:'#d33',
                    confirmButtonText:'Yes, delete it!'
                }).then((result)=> {
                    if(result.value) {
                        axios.delete(`/customers/${id}`,{
                            headers: {
                                'x-auth':localStorage.getItem('authToken')
                            }
                        })
                        .then(response=> {
                            if(response.data.hasOwnProperty('errors')) {
                                alert(response.data.message)
                            } else {
                                dispatch(deleteCustomer(id))
                                props.history.push('/customers')
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Customer deleted Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                            })
                            }
                        })
                    }
                })
            }
        })
    }  
}