const customerInitialState=[]

const customersReducer=(state=customerInitialState,action)=> {
    switch(action.type){
        case 'SET_CUSTOMERS' : {
            return [...action.payload]
        }
        case 'ADD_CUSTOMER' : {
            return [...state,action.payload]
        }
        case 'EDIT_CUSTOMER' : {
            return state.map(customer=> {
                if(customer._id==action.payload.id) {
                    return {...customer,...action.payload.customer}
                } else {
                    return {...customer}
                }
            })
        }
        case 'DELETE_CUSTOMER' : {
            return [...state.filter(customer=>customer._id!=action.payload)]
        }
        default : {
            return [...state]
        }
    }
}

export default customersReducer