import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PrivateRoute from './components/privateRoute'
import Home from '../src/components/common/home'
import Register from '../src/components/user/register'
import Login from '../src/components/user/login'
import Customer from '../src/components/customers/customer'
import CustomerShow from '../src/components/customers/show'
import CustomerNew from '../src/components/customers/new'
import CustomerEdit from '../src/components/customers/edit'
import Department from '../src/components/departments/department'
import DepartmentNew from '../src/components/departments/new'
import DepartmentEdit from '../src/components/departments/edit'
import Employee from '../src/components/employees/employee'
import EmployeeShow from '../src/components/employees/show'
import EmployeeNew from '../src/components/employees/new'
import EmployeeEdit from '../src/components/employees/edit'
import Ticket from '../src/components/tickets/ticket'
import TicketNew from '../src/components/tickets/new'
import TicketEdit from '../src/components/tickets/edit'
import TicketShow from '../src/components/tickets/show'
import {startLogoutUser} from './actions/user'
import {Navbar,Nav} from 'react-bootstrap'

function App(props) {
  function handleLogout() {
    props.dispatch(startLogoutUser())
  }
  return (
    <BrowserRouter>
    <div>
    {!localStorage.getItem('authToken') ? 
    (<Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#"><h1>TICKET MASTER APP</h1></Navbar.Brand> 
      <Nav.Link href="/"><Link to="/">HOME</Link></Nav.Link>
      <Nav.Link href="#"><Link to="/users/register">REGISTER</Link> </Nav.Link> 
     <Nav.Link href="#"><Link to="/users/login">LOGIN</Link> </Nav.Link>  
    </Navbar> ) : (
    <Navbar bg="dark" variant="primary">
    <Navbar.Brand href="#"><h1>TICKET MASTER APP</h1></Navbar.Brand> 
    <Nav.Link href="/"><Link to="/">HOME</Link></Nav.Link>
    <Nav.Link href="#"><Link to="/customers">CUSTOMERS</Link></Nav.Link>
    <Nav.Link href="#"><Link to="/departments">DEPARTMENTS</Link></Nav.Link>
    <Nav.Link href="#"><Link to="/employees">EMPLOYEES</Link></Nav.Link>
    <Nav.Link href="#"><Link to="/tickets">TICKETS</Link></Nav.Link>
   <Nav.Link href="#"><Link to="#" onClick={()=>{handleLogout()}}>LOGOUT</Link></Nav.Link> 
  <Navbar.Collapse className="justify-content-end">
   <Navbar.Text>
      <h2 className="text-warning">{props.user.username}</h2>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>)   }
      <Route path="/" component={Home} exact={true} />
      <Route path="/users/register" component={Register} />
      <Route path="/users/login" component={Login} />

      <PrivateRoute path="/customers" component={Customer} exact={true}/>
      <PrivateRoute path="/customers/show/:id" component={CustomerShow} />
      <PrivateRoute path="/customers/new" component={CustomerNew}/>
      <PrivateRoute path="/customers/edit/:id" component={CustomerEdit}/>

      <PrivateRoute path="/departments" component={Department} exact={true}/>
      <PrivateRoute path="/departments/new" component={DepartmentNew} />
      <PrivateRoute path="/departments/edit/:id" component={DepartmentEdit} />

      <PrivateRoute path="/employees" component={Employee} exact={true}/>
      <PrivateRoute path="/employees/show/:id" component={EmployeeShow} />
      <PrivateRoute path="/employees/new" component={EmployeeNew}/>
      <PrivateRoute path="/employees/edit/:id" component={EmployeeEdit}/>

      <PrivateRoute path="/tickets" component={Ticket} exact={true}/>
      <PrivateRoute path="/tickets/new" component={TicketNew}/>
      <PrivateRoute path="/tickets/edit/:id" component={TicketEdit} />
      <PrivateRoute path="/tickets/show/:id" component={TicketShow} />

    </div>
    </BrowserRouter>
  );
}
const mapstateToProps=(state)=> {
  return {
    user:state.user
  }
}
export default connect(mapstateToProps)(App)
