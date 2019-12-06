import React from 'react'
import {connect} from 'react-redux'
import {startAddTicket} from '../../actions/tickets'
import TicketForm from '../tickets/form'

class TicketNew extends React.Component {
    submitHandler=(formData)=>{
        this.props.dispatch(startAddTicket(formData,this.props))
    }
    render() {
        return (
            <div>
                <TicketForm  submitHandler={this.submitHandler}/>
            </div>
        )
    }
}
export default connect()(TicketNew)