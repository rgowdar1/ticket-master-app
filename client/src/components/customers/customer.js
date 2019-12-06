import React from 'react'
import {Link} from 'react-router-dom'
import { startSetCustomers } from '../../actions/customers'
import {connect} from 'react-redux'
import {Button,Card} from 'react-bootstrap'
class Customer extends React.Component {
    
    componentDidMount() {
       this.props.dispatch(startSetCustomers())
    }
    render() {
        return (<div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__340.jpg"+")",height:"100vh"}}>
        <div className="container">
            <br/>
            <h1 className="text-center">CUSTOMERS</h1>
                    <div className="row">
                        <div className="col-md-3">
                        <Link to="/customers/new"><Button className="primary">Add Customer</Button></Link><br/><br/>
                        </div>
                    </div>
                    <div className="row">
                    {this.props.customers.map((cust)=>{
                            return <div className="col-md-3 text-center">
                                <Card border="primary" style={{backgroundColor:'#FFF1D4'}}>
                                 <Card.Header>{cust.name}</Card.Header>
                                 <Card.Body>
                                     <Card.Text>
                                        <p>EMAIL:{cust.email}<br/>
                                        MOBILE:{cust.mobile}</p>
                                     </Card.Text>
                                 </Card.Body>
                                 <Card.Footer>
                                 <Link to={`/customers/show/${cust._id}`}><Button>SHOW</Button></Link><span> </span>
                                 <Link to={`/customers/edit/${cust._id}`}><Button>EDIT</Button></Link>
                                 </Card.Footer>
                                </Card><br/>
                                </div>})}
                    </div>
                </div>  
                </div>
                )
     }
}

const mapStateToProps=(state)=> {
    return {
        customers:state.customers
    }
}

export default connect(mapStateToProps)(Customer)
               
                