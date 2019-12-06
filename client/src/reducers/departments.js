const departmentInitialState=[]

const departmentsReducer=(state=departmentInitialState,action)=> {
    switch(action.type){
        case 'SET_DEPARTMENTS' : {
            return [...action.payload]
        }
        case 'ADD_DEPARTMENT' : {
            return [...state,action.payload]
        }
        case 'EDIT_DEPARTMENT' : {
            return state.map(department=> {
                if(department._id==action.payload.id) {
                    return {...department,...action.payload.department}
                } else {
                    return {...department}
                }
            })
        }
        case 'DELETE_DEPARTMENT' : {
            return [...state.filter(department=>department._id!=action.payload)]
        }
        default : {
            return [...state]
        }
    }
}

export default departmentsReducer