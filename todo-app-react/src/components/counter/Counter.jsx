import React, { Component } from 'react'; 
import CounterButton from './CounterButton';
import './Counter.css'

class Counter extends Component{

    constructor(){
        super();
        this.state={
            counter:0
        }

        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.multiply=this.multiply.bind(this)
        this.reset=this.reset.bind(this)
    }

    render(){
        return <div className='counter'>
          <CounterButton by={1} incrementMethod={this.increment} decrementMethod = {this.decrement} multiplyMethod={this.multiply}></CounterButton>
          <CounterButton by={2} incrementMethod={this.increment} decrementMethod = {this.decrement} multiplyMethod={this.multiply} ></CounterButton>
          <CounterButton by={3} incrementMethod={this.increment} decrementMethod = {this.decrement} multiplyMethod={this.multiply}></CounterButton>
          <span className='val'> {this.state.counter}</span>

          {/* //use a single state */}
          <div><button className='reset'onClick={this.reset}>Reset</button></div>
        </div>
    }

    reset(){
        this.setState({
            counter:0
        })
     
    }
    increment(by){

        this.setState({
            counter:this.state.counter+by
        })
        console.log("increment method counter");
    }

    decrement(by){

        this.setState({
            counter:this.state.counter-by
        })
        console.log("decrement method called");
    }

    multiply(by){
        console.log("multiply method called")

        this.setState({
            counter:this.state.counter +10
        })
        
    }

}

export default Counter;

