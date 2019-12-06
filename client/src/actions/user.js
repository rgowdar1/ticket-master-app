import axios from '../config/axios'

export const startRegisterUser=(formData,props)=> {
    return (dispatch)=> {
        axios.post('/users/register',formData)
        .then(response=> {
            if(response.data._id) {
                props.history.push('/users/login')
            } else {
                alert('User already Exists')
            }
        })
    }
}

export const startLoginUser=(formData,props)=> {
    return (dispatch)=> {
        axios.post('/users/login',formData)
            .then(response=> {
                if(response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    const token=response.data.token
                    localStorage.setItem('authToken',token)
                    props.history.push('/')
                    window.location.reload()
                }
            })
    }
}

export const setUser=(user)=> {
    return {type:'SET_USER',payload:user}
}

export const startSetUser=()=> {
    return (dispatch)=> {
        axios.get('/users/account',{
            headers: {
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=> {
            const user=response.data
            dispatch(setUser(user))
        })
    }
}
export const removeUser=()=> {
    return {type:'REMOVE_USER'}
}
export const startLogoutUser=()=> {
    return (dispatch)=> {
        axios.delete('/users/logout',{
            headers: {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
            .then(response=> {
                if(response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                localStorage.removeItem('authToken')
                dispatch(removeUser())
                window.location.href='/'
                }
            })
    }
}