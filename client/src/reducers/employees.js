const employeeInitialState=[]

const employeesReducer=(state=employeeInitialState,action)=> {
    switch(action.type){
        case 'SET_EMPLOYEES' : {
            return [...action.payload]
        }
        case 'ADD_EMPLOYEE' : {
            return [...state,action.payload]
        }
        case 'EDIT_EMPLOYEE' : {
            return state.map(employee=> {
                if(employee._id==action.payload.id) {
                    return {...employee,...action.payload.employee}
                } else {
                    return {...employee}
                }
            })
        }
        case 'DELETE_EMPLOYEE' : {
            return [...state.filter(employee=>employee._id!=action.payload)]
        }
        default : {
            return [...state]
        }
    }
}

export default employeesReducer