import axios from '../config/axios'

export const setSingleEmployee=(employee)=> {
    return {type:'SET_SINGLE_EMPLOYEE',payload:employee}
}

export const startSetSingleEmployee=(id)=> {
    return (dispatch)=> {
        axios.get(`/employees/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const employee=response.data
            dispatch(setSingleEmployee(employee))
        })
    }
}