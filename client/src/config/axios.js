import Axios from 'axios'

const axios=Axios.create({
    baseURL:"https://ticket-master-rakshith.herokuapp.com"
})

export default axios