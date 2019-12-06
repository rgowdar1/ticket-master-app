import axios from '../config/axios'

export const setSingleTicket=(ticket)=> {
    return {type:'SET_SINGLE_TICKET',payload:ticket}
}

export const startSetSingleTicket=(id)=> {
    return (dispatch)=> {
        axios.get(`/tickets/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const ticket=response.data
            dispatch(setSingleTicket(ticket))
        })
    }
}