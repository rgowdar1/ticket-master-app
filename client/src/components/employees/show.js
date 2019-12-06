import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Card,Button} from 'react-bootstrap'
import image1 from '../../images/user2.png'
import { startSetSingleEmployee } from '../../actions/singleEmployee'
import { startDeleteEmployee } from '../../actions/employees'

class EmployeeShow extends React.Component {
    
    componentDidMount() {
        const id=this.props.match.params.id
       this.props.dispatch(startSetSingleEmployee(id))
    }
    handleRemove=()=>{
        const id=this.props.match.params.id
        this.props.dispatch(startDeleteEmployee(id,this.props))
}
    render() {
        return (
            <div style={{backgroundImage:"url("+"https://cdn.pixabay.com/photo/2016/04/12/22/35/watercolour-1325656__340.jpg"+")",height:"100vh"}}>
        <div className="container"><br/><br/>
        <Link to="#" onClick={()=>{
                    this.props.history.push('/employees')
                }}><Button className="primary">BACK</Button></Link>
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                    <Card border="primary" style={{backgroundColor:'#FFF1D4'}}>
                                 <Card.Header><img src={image1} alt=""/></Card.Header>
                                 <Card.Body>
                                     <Card.Text>
                                    NAME:{this.props.employee.name}<br/>
                                    EMAIL:{this.props.employee.email}<br/>
                                    MOBILE:{this.props.employee.mobile}
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
        employee:state.singleEmployee
    }
}
export default connect(mapStateToProps)(EmployeeShow)