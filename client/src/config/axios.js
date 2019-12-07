import Axios from 'axios'

const axios=Axios.create({
    baseURL:"https://ticket-master-rakshith.herokuapp.com/api"
})

export default axios