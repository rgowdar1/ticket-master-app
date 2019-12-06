import React from 'react'
import { Chart } from "react-google-charts"
import {startSetDepartments} from '../../actions/departments'
import {connect} from 'react-redux'

class BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            tickets:props.tickets
        } 
    }
    chartHandle=()=> {
        const chartArray=[['Departments','Tickets']]
        this.props.departments.map(dept=> {
        const sample=[dept.name,this.state.tickets.filter(tick=>tick.department._id==dept._id).length]
        chartArray.push(sample)
        })
        console.log('chartArray',chartArray)
        return chartArray
    }
    componentDidMount() {
        this.props.dispatch(startSetDepartments())
        console.log(this.props.tickets)
    }
    render() {
        console.log(this.props.departments)
        return (<div>
                    <Chart
                     width={'500px'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={this.chartHandle() }
                     options={{
                    title: 'Tickets by Department',
                    chartArea: { width: '50%' },
                    hAxis: {
                    title: 'Departments',
                     minValue: 0,
                    },
                    vAxis: {
                    title: 'Tickets',
                    },
                 }}
                    // For tests
                    rootProps={{ 'data-testid': '1' }}
/>
             </div>)
    }
}
const mapStateToProps=(state)=> {
    return {
        departments:state.departments
    }
}
export default connect(mapStateToProps)(BarChart)