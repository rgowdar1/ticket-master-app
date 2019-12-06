const singleCustomerInitialState={}
const singleCustomerReducer=(state=singleCustomerInitialState,action)=> {
    switch(action.type) {
        case 'SET_SINGLE_CUSTOMER' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default singleCustomerReducer