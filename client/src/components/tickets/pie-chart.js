import React from 'react'
import { Chart } from "react-google-charts"

export default class PieChart extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            tickets:props.tickets
        } 
    }
    
    render() {
        return (<div>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                        ['Priority', 'Total'],
                        ['High',this.state.tickets.filter(ticket=>ticket.priority==='high').length ],
                        ['Medium',this.state.tickets.filter(ticket=>ticket.priority==='medium').length ] ,
                        ['Low', this.state.tickets.filter(ticket=>ticket.priority==='low').length ],
  ]}
  options={{
    title: 'Ticket Priority',
  }}
  rootProps={{ 'data-testid': '1' }}
                    />
             </div>)
    }
}

