import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setTickets=(tickets)=> {
    return {type:'SET_TICKETS',payload:tickets}
}

export const startSetTickets=()=> {
    return (dispatch)=> {
        axios.get('/tickets',{
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const tickets=response.data
            console.log('tickets',tickets)
            dispatch(setTickets(tickets))
        })
    }
}

export const addTicket=(ticket)=> {
    return {type:'ADD_TICKET',payload:ticket}
}

export const startAddTicket=(formData,props)=> {
    return (dispatch)=> {
        axios.post('/tickets',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                const ticket=response.data
                dispatch(addTicket(ticket))
                props.history.push('/tickets')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'ticket added Successfully',
                    showConfirmButton: false,
                    timer: 1500
            })
            }
        })
    }
}

export const editTicket=(ticket,id)=> {
    return {type:'EDIT_TICKET',payload:{ticket,id}}
}

export const startEditTicket=(formData,id,props)=> {
    return (dispatch)=> {
        axios.put(`/tickets/${id}`,formData,{
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)
            } else {
                const ticket=response.data
                dispatch(editTicket(ticket,id))
                props.history.push('/tickets')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'ticket updated Successfully',
                    showConfirmButton: false,
                    timer: 1500
            })
            setTimeout(() => {
                window.location.reload()
            }, 1500);  
            }
        })
    }
}

export const deleteTicket=(id)=> {
    return {type:'DELETE_TICKET',payload:id}
}

export const startDeleteTicket=(id,props)=> {
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
                axios.delete(`/tickets/${id}`,{
                    headers: {
                        'x-auth':localStorage.getItem('authToken')
                    }
                })
                .then(response=> {
                    if(response.data.hasOwnProperty('errors')) {
                        alert(response.data.message)
                    } else {
                        props.history.push('/tickets')
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Ticket deleted Successfully',
                            showConfirmButton: false,
                            timer: 1500
                    })
                    }
                })
            }
        })
        
    }
}

export const searchTicket=(tickets)=> {
    return {type:'SEARCH_TICKET',payload:tickets}
}

export const startSearchTicket=(value)=> {
    return (dispatch)=> {
        axios.get('/tickets',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
                const tickets=response.data.filter(ticket=>ticket.code.toLowerCase().includes(value.toLowerCase()))
                dispatch(searchTicket(tickets))
        })
    }
}

export const setPriorityTicket=(tickets)=> {
    return {type:'PRIORITY_TICKET',payload:tickets}
}

export const startSetPriorityTicket=(data)=> {
    return (dispatch)=> {
        axios.get('/tickets',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const tickets=response.data.filter(ticket=>ticket.priority==data)
            dispatch(setPriorityTicket(tickets))
        })
    }
}