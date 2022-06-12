import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todos/HelloWorldService';


class WelcomeComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            message:"",
            welcomeMessage:""
        }
        this.getHelloWorld=this.getHelloWorld.bind(this)
        this.getBean=this.getBean.bind(this)
        this.getBeanWithParams=this.getBeanWithParams.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

 

    render(){
        return (
            <>
           <h1> Welcome  {this.props.params.name}</h1>
           <div> You can go to the todos by clicking <Link to="/todos">here</Link> </div>

           <button className='btn btn-success' onClick={this.getBeanWithParams}> Say Hello </button>

         
         {/*
         <br></br> 
          <div className='container'>
              TextBox <input type="text" name="message" value={this.state.message} onChange={this.handleChange}></input>
          </div>
        
        
          <button className='btn btn-success'
          onClick={this.onSubmit}> Submit</button>
          */}
         <div className='container' style= {{margin: "10px "}}>
          {this.state.welcomeMessage } 

         </div> 
            </>   
            )
    }

    onSubmit(){
        this.setState({resultmessage:this.state.message});
    }

    getHelloWorld(){
    //   let val= HelloWorldService.retrieveHelloWorld();
    //     console.log(val)
    HelloWorldService.retrieveHelloFromReact().
    then(response=> this.setState({message:response.data}))
    }

    getBean(){
        HelloWorldService.retrieveBean().
        then(response => console.log("Id "+response.data.id+"  City "+response.data.city))
        }

    getBeanWithParams(){

       console.log(this.props.params)
       this.setState({welcomeMessage: " Hello "+ this.props.params.name})
        // HelloWorldService.retrieveBeanWithParameters(city)
        // .then(response => console.log("Params Id "+response.data.id+"  City "+response.data.city)).catch(error=>this.handleError(error))
    }
    

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
         })
    }

    handleError(error){
        console.log(error.response)
        let errorMessage=''
        if(error.message){
            errorMessage+=error.message
        }
        if(error.response && error.response.data){
            errorMessage+=error.response.data.message
        }
        this.setState({welcomeMessage:errorMessage})
    }


    
}

export default WelcomeComponent;
