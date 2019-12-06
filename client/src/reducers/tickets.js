const ticketInitialState=[]

const ticketsReducer=(state=ticketInitialState,action)=> {
    switch(action.type){
        case 'SET_TICKETS' : {
            return [...action.payload]
        }
        case 'ADD_TICKET' : {
            return [...state,action.payload]
        }
        case 'EDIT_TICKET' : {
            return state.map(ticket=> {
                if(ticket._id==action.payload.id) {
                    return {...ticket,...action.payload.ticket}
                } else {
                    return {...ticket}
                }
            })
        }
        case 'PRIORITY_TICKET' : {
            return [...action.payload]
        }
        case 'SEARCH_TICKET' : {
            return [...action.payload]
        }
        case 'DELETE_TICKET' : {
            return [...state.filter(ticket=>ticket._id!=action.payload)]
        }
        default : {
            return [...state]
        }
    }
}

export default ticketsReducer