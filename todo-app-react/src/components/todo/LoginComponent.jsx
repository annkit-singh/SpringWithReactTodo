import React, { Component } from 'react'; 
import AuthenticationService  from './AuthenticationService.js';
import './style.css'


class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            hasLoginFailed:false,
            showSuccessMessage:false
        }
        this.handleChange=this.handleChange.bind(this);
        this.loginClicked=this.loginClicked.bind(this)
    }


    render(){
        return (<div>
            <h1>Login</h1>
           
            {this.state.hasLoginFailed  && <div className="alert alert-warning" >Invalid Credentials</div>} 
            {/* <ShowValidCredentials showSuccessMessage={this.state.showSuccessMessage} ></ShowValidCredentials> */}
            Username : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
            Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
            <button onClick={this.loginClicked}> Login</button>
        </div>)
    }

    loginClicked(){
        // if(this.state.username==="jammumeans" && this.state.password==="dummy"){
        //     console.log("Login Successful")
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     this.props.navigate(`/welcome/${this.state.username}`)
        //     this.setState({hasLoginFailed:false});
        //     this.setState({showSuccessMessage:true});
        // }
        // else{
        //     console.log("Login UnSuccessful")
        //     this.setState({hasLoginFailed:true});
        //     this.setState({showSuccessMessage:false});

        // }



        // AuthenticationService.executeBasicAuthnticationService(this.state.username,this.state.password)
        // .then(()=>{
        //     AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //     this.props.navigate(`/welcome/${this.state.username}`)
            
        // })
        // .catch(()=>{
        //     console.log("Login UnSuccessful")
        //     this.setState({hasLoginFailed:true});
        //     this.setState({showSuccessMessage:false});
        // })

        // console.log("LoginClicked")

        AuthenticationService.executeJwtAuthnticationService(this.state.username,this.state.password)
        .then((response)=>{
           
            AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token)
            this.props.navigate(`/welcome/${this.state.username}`)
            
        })
        .catch(()=>{
            // console.log("Login UnSuccessful")  
            this.setState({hasLoginFailed:true});
            this.setState({showSuccessMessage:false});
        })
        
    }
    handleChange(event){
       this.setState({
           [event.target.name]:event.target.value

       })
    }

    
}

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return  <div>Invalid Credentials</div>;
//     }
//     return null;
// }
// function ShowValidCredentials(props){
//     if(props.showSuccessMessage){
//         return  <div>Valid Credentials ! Login Successful</div>;
//     }
//     return null;
// }

export default LoginComponent;
