import React, { Component } from 'react'; 
import './Counter.css'


 class CounterButton extends Component{

    constructor(){
        super();
        // this.state={
        //     counter:1
        // }
        // this.increment=this.increment.bind(this)
    }

    render(){
        return <div className="counter">
            <button className='button' onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
            <button className='button' onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            <button className='button' onClick={()=>this.props.multiplyMethod(this.props.by)}>x {this.props.by}</button>
           
        </div>
    }

// assign a state to every button
    // increment(){
    //     this.setState({
    //         counter:this.state.counter+this.props.by
    //     })
    //     this.props.incrementMethod(this.props.by)
    // }

}

export default CounterButton


window.count=20
var obj={
    count:10,
    doSomeThingLater: function(min){
        setTimeout(()=>{
            this.count++;
            console.log(this.count);
        },min)
    }
}
