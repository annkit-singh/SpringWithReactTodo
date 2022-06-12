import React,{Component} from "react"
import TodoService from "../../api/todos/TodoService"
import moment from "moment"
import AuthenticationService from "./AuthenticationService"

class ListTodosComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            message:null
        }

        this.deleteTodo=this.deleteTodo.bind(this)
        this.refreshTodo=this.refreshTodo.bind(this)
        this.addTodo=this.addTodo.bind(this)

    }

    componentDidMount(){
       this.refreshTodo();
        
    }


    refreshTodo(){
        let user=AuthenticationService.getUserNameLoggedIn();
        TodoService.retrieveAllTodos(user).
        then(response=>this.setState({todos:response.data}))
    }

    deleteTodo(id){
        let username=AuthenticationService.getUserNameLoggedIn();
        TodoService.deleteTodo(username,id).
        then(response=>this.setState({message:`Delete todo of id ${id} and Username ${username}`}))
        this.refreshTodo();
    }

    updateTodo(id){
        this.props.navigate(`/todos/${id}`)
    }
    addTodo(){
        this.props.navigate(`/todos/-1`)
    }


    render(){
        return (
            <div>
                <h1>List Todos</h1>
                 {this.state.message &&    <div className="alert alert-success">{this.state.message}</div> }
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Is Completed?</th>
                                <th>Created Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo=>
                            <tr key={todo.id}>
                                <td> {todo.id}</td>
                                <td> {todo.description}</td>
                                <td> {todo.done.toString()}</td>
                                <td> {moment(todo.targetDate.toString()).format('DD-MMM-YYYY')}</td>
                                <td><button className="btn btn-danger" onClick={()=>this.deleteTodo(todo.id)}>Delete</button></td>
                                <td><button className="btn btn-success" onClick={()=>this.updateTodo(todo.id)}>Update</button></td>
                            </tr>
                                )
                         }   
                        </tbody>

                    </table>
                    <div className="row">
                    <button className="btn btn-sucess" onClick={this.addTodo}>Add Todo</button>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default ListTodosComponent