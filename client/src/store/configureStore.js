import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/user'
import customersReducer from '../reducers/customers'
import singleCustomerReducer from '../reducers/singleCustomer'
import departmentsReducer from '../reducers/departments'
import employeesReducer from '../reducers/employees'
import singleEmployeeReducer from '../reducers/singleEmployee'
import ticketsReducer from '../reducers/tickets'
import singleTicketReducer from '../reducers/singleTicket'
const configureStore=()=> {
    const store=createStore(combineReducers({
        user:userReducer,
        customers:customersReducer,
        singleCustomer:singleCustomerReducer,
        departments:departmentsReducer,
        employees:employeesReducer,
        singleEmployee:singleEmployeeReducer,
        tickets:ticketsReducer,
        singleTicket:singleTicketReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore