import React, { Component } from 'react'; 
import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom';
import ListTodosComponent from './ListTodosComponent';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import withNavigation from './withNavigation';
import withParams  from './withParams';

import AuthenticationRoute from './AuthenticationRoute.jsx';
import ErrorComponent from './ErrorComponent';
import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import TodoComponent from './TodoComponent';


class TodoApp extends Component{


    render(){
        const LoginComponentWithNavigation=withNavigation(LoginComponent);
        const WelcomeComponentWithParams=withParams(WelcomeComponent);
        const HeaderComponentWithNavigation=withNavigation(HeaderComponent);
        const ListTodosComponentWithNavigation=withNavigation(ListTodosComponent);
        const TodoComponentWithParamsAndNavigation=withParams(withNavigation(TodoComponent))
        return (<div className='TodoApp'>
            <Router>
               <HeaderComponentWithNavigation/>
               <Routes>
                   <Route path="/" element = {<LoginComponentWithNavigation/>}/>
                   <Route path="/login" element = {<LoginComponentWithNavigation/>}/>
                   <Route path="/welcome/:name" element = {<AuthenticationRoute><WelcomeComponentWithParams/></AuthenticationRoute>}/>
                   <Route path="/todos" element = {<AuthenticationRoute><ListTodosComponentWithNavigation/></AuthenticationRoute>}/>
                   <Route path="/todos/:id" element = {<AuthenticationRoute><TodoComponentWithParamsAndNavigation/></AuthenticationRoute>}/>
                   <Route path="/logout" element = {<AuthenticationRoute><LogoutComponent/></AuthenticationRoute>}/>
                   <Route path="*" element = {<ErrorComponent/>}/>
                   
               </Routes>

             <FooterComponent></FooterComponent>
            </Router>
        </div>)
    }

    
}





export default TodoApp;
