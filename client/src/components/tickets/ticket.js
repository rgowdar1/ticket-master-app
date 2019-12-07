import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PieChart from '../tickets/pie-chart'
import { startSetTickets, startEditTicket, startSearchTicket, startSetPriorityTicket } from '../../actions/tickets'
import { Table, Button,ProgressBar } from 'react-bootstrap'
import BarChart from '../tickets/bar-chart'

class Ticket extends React.Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }
    handleSearch = (e) => {
        this.setState({ search: e.target.value })
        this.props.dispatch(startSearchTicket(e.target.value))
    }
    componentDidMount() {
        this.props.dispatch(startSetTickets())
    }
    priorityHandle = (data) => {
        this.props.dispatch(startSetPriorityTicket(data))
    }

    checkHandle = (e, id) => {
        const data = {
            isResolved: e.target.checked
        }
        this.props.dispatch(startEditTicket(data, id, this.props))
    }
    render() {
        return (
            <div style={{ backgroundImage: "url(" + "https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__340.jpg" + ")", backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
                <div className="container"><br />
                    <h1 className="text-center">TICKETS</h1>
                    <Link to="tickets/new"><Button>ADD TICKET</Button></Link><br /><br />
                    <div className="row">
                        <div className="col-md-4 offset-md-4">
                            <h3 className="warning text-center">SEARCH HERE</h3>
                            <input type="text" className="form-control" value={this.state.search} onChange={this.handleSearch} placeholder="Enter Code"></input>
                        </div>
                    </div><br /><br />
                    <Button onClick={() => {
                        this.props.dispatch(startSetTickets())
                    }}>ALL</Button>
                    <Button onClick={() => {
                        this.priorityHandle('high')
                    }}>HIGH</Button>
                    <Button onClick={() => {
                        this.priorityHandle('medium')
                    }}>MEDIUM</Button>
                    <Button onClick={() => {
                        this.priorityHandle('low')
                    }}>LOW</Button><br /><br />
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>CODE</th>
                                <th>CUSTOMER</th>
                                <th>PRIORITY</th>
                                <th>STATUS</th>
                                <th>SHOW</th>
                                <th>EDIT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.tickets.map(ticket => {
                                return <tr style={{backgroundColor:(ticket.isResolved?'#C0C0C0':'#808080')}} key={ticket._id}>
                                    <td>{ticket.code}</td>
                                    <td>{ticket.customer.name}</td>
                                    <td>{ticket.priority}</td>
                                    <td>{ticket.isResolved ? 'Completed ' :'Not Completed '}<input type="checkbox" checked={ticket.isResolved} onChange={(e) => {
                                        this.checkHandle(e, ticket._id)
                                    }}  /></td>
                                    <td><Link to={`/tickets/show/${ticket._id}`}><Button>SHOW</Button></Link></td>
                                    <td><Link to={`/tickets/edit/${ticket._id}`}><Button>EDIT</Button></Link></td>
                                </tr>
                            })}
                        </tbody>
                    </Table><br />
                    <h3 className="text-center">PROGRESS</h3>
                    <ProgressBar animated now={(this.props.tickets.filter(ticket=>ticket.isResolved).length/this.props.tickets.length)*100} label={`${Math.round((this.props.tickets.filter(ticket=>ticket.isResolved).length/this.props.tickets.length)*100)}%`} />
                    <br/><br/>
                    <h1 className="text-center">STATISTICS</h1><br/><br/>
                    <div className="row">
                        <div className="col-md-6">
                        {this.props.tickets.length !== 0 && <PieChart tickets={this.props.tickets} />}
                        </div>
                        <div className="col-md-6">
                        {this.props.tickets.length !== 0 && <BarChart tickets={this.props.tickets} />}
                        </div>
                    </div>
                </div><br/><br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tickets: state.tickets
    }
}
export default connect(mapStateToProps)(Ticket)