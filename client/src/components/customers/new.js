import React from 'react'
import {connect} from 'react-redux'
import CustomerForm from '../customers/form'
import {startAddCustomer} from '../../actions/customers'

class CustomerNew extends React.Component {
    
    submitHandler=(formData) => {
        this.props.dispatch(startAddCustomer(formData,this.props))
    }

    render() {
        return (
            <div>
                <CustomerForm submitHandler={this.submitHandler}/>
            </div>
        )
    }
}
export default connect()(CustomerNew)
