import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Card,Button } from 'react-bootstrap'
import { startSetSingleTicket } from '../../actions/singleTicket'
import image1 from '../../images/user2.png'
import { startDeleteTicket } from '../../actions/tickets'

class TicketShow extends React.Component {
    constructor() {
        super()
        this.state={
            ticket:{}
        }
    }
    deleteHandler=()=>{
        const id=this.props.match.params.id
        this.props.dispatch(startDeleteTicket(id,this.props))
}
    componentDidMount() {
        const id=this.props.match.params.id
        this.props.dispatch(startSetSingleTicket(id))
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__340.jpg"+")",height:"100vh"}}>
            <div className="container"><br/><br/>
                
                <Link to='#' onClick={()=>{
                    this.props.history.push('/tickets')
                }}><Button>BACK</Button></Link><br/>
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                    <Card>
                    <Card.Header><img src={image1} alt=""/><br/>
                        NAME:{this.props.ticket.customer && this.props.ticket.customer.name}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            DEPARTMENT:{this.props.ticket.department && this.props.ticket.department.name}<br/>
                            PRIORITY:{this.props.ticket.priority}<br/>
                            MESSAGE:{this.props.ticket.message}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button onClick={()=>{
                                this.deleteHandler()
                            }
                            }>DELETE</Button>
                    </Card.Footer>
                </Card>
                    </div>
                </div>
                
            </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=> {
    return {
        ticket:state.singleTicket
    }
}
export default connect(mapStateToProps)(TicketShow)