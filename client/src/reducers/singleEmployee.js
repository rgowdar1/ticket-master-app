const singleEmployeeInitialState={}
const singleEmployeeReducer=(state=singleEmployeeInitialState,action)=> {
    switch(action.type) {
        case 'SET_SINGLE_EMPLOYEE' : {
            return {...action.payload}
        }
        default : {
            return {...state}
        }
    }
}

export default singleEmployeeReducer