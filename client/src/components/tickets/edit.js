import React from 'react'
import {connect} from 'react-redux'
import TicketForm from '../tickets/form'
import { startSetSingleTicket } from '../../actions/singleTicket'
import { startEditTicket } from '../../actions/tickets'

class TicketEdit extends React.Component {
    
    submitHandler=(formData)=>{
        const id=this.props.match.params.id
       this.props.dispatch(startEditTicket(formData,id,this.props))
    }

    componentDidMount() {
        const id=this.props.match.params.id
        this.props.dispatch(startSetSingleTicket(id))
    }
    render() {
        return (
            <div>
                {Object.keys(this.props.ticket).length!==0 && <TicketForm ticket={this.props.ticket} submitHandler={this.submitHandler}/>}
            </div>
        )
    }
}
const mapStateToProps=(state)=> {
    return {
        ticket:state.singleTicket
    }
}
export default connect(mapStateToProps)(TicketEdit)