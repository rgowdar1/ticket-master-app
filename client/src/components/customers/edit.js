import React from 'react'
import {connect} from 'react-redux'
import {startSetSingleCustomer} from '../../actions/singleCustomer'
import CustomerForm from '../customers/form'
import {startEditCustomer} from '../../actions/customers'

class CustomerEdit extends React.Component {
  
    componentDidMount() {
        const id=this.props.match.params.id
        this.props.dispatch(startSetSingleCustomer(id))
    }
    submitHandler=(formData)=>{
        const id=this.props.match.params.id
       this.props.dispatch(startEditCustomer(formData,id,this.props))
    }
    render() {
        return (
            <div>
                <h1>EDIT FORM</h1>
                {Object.keys(this.props.customer).length!==0 && <CustomerForm customer={this.props.customer} submitHandler={this.submitHandler}/>}
            </div>
        )
    }
}

const mapStateToProps=(state)=> {
    return {
        customer:state.singleCustomer
    }
}
export default connect(mapStateToProps)(CustomerEdit)