import React from 'react'
import {connect} from 'react-redux'
import {startSetSingleCustomer} from '../../actions/singleCustomer'
import {Link} from 'react-router-dom'
import {startDeleteCustomer} from '../../actions/customers'
import {Card,Button} from 'react-bootstrap'
import image1 from '../../images/user2.png'

class CustomerShow extends React.Component {

    componentDidMount() {
        const id=this.props.match.params.id
        this.props.dispatch(startSetSingleCustomer(id))
    }
    handleRemove=()=>{
        const id=this.props.match.params.id
        this.props.dispatch(startDeleteCustomer(id,this.props))
    }
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__340.jpg"+")",height:"100vh"}}>
        <div className="container"><br/><br/>
        <Link to="#" onClick={()=>{
                    this.props.history.push('/customers')
                }}><Button className="primary">BACK</Button></Link>
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                    <Card border="primary" style={{backgroundColor:'#FFF1D4'}}>
                                 <Card.Header><img src={image1} alt=""/></Card.Header>
                                 <Card.Body>
                                     <Card.Text>
                                    NAME:{this.props.customer.name}<br/>
                                    EMAIL:{this.props.customer.email}<br/>
                                    MOBILE:{this.props.customer.mobile}
                                     </Card.Text>
                                 </Card.Body>
                                 <Card.Footer>
                                 <Button onClick={()=>{
                                this.handleRemove()
                            }}>DELETE</Button>
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
        customer:state.singleCustomer
    }
}
export default connect(mapStateToProps)(CustomerShow)