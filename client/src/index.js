import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {Provider} from 'react-redux'
import {startSetUser} from './actions/user'
import configureStore from './store/configureStore'

const store=configureStore()
store.subscribe(()=> {
    console.log(store.getState())
})
if(localStorage.getItem('authToken')){
    store.dispatch(startSetUser())
}

const ele=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(ele, document.getElementById('root'));

