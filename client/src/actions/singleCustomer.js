import axios from '../config/axios'

export const setSingleCustomer=(customer)=> {
    return {type:'SET_SINGLE_CUSTOMER',payload:customer}
}

export const startSetSingleCustomer=(id)=> {
    return (dispatch)=> {
        axios.get(`/customers/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const customer=response.data
            dispatch(setSingleCustomer(customer))
        })
    }
}