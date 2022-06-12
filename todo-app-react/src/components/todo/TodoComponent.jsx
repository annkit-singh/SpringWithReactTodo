import React,{Component} from "react";
import { Field, Formik,Form, ErrorMessage } from "formik";
import moment from "moment";
import AuthenticationService from "./AuthenticationService";
import TodoService from "../../api/todos/TodoService";
class TodoComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.params.id,
            description:'',
            targetDate:moment(new Date()).format('YYYY-MM-DD')

        }
        this.validate=this.validate.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        // this.gotoTodos=this.gotoTodos.bind(this)
    }

    componentDidMount(){
        if(this.state.id === -1){
            return
        }
        let username=AuthenticationService.getUserNameLoggedIn()
        TodoService.retrieveTodo(username,this.state.id)
        .then(response => this.setState({
            description:response.data.description,
            targetDate:moment(response.data.targetDate).format('YYYY-MM-DD')
        }))
    }

    validate(values){
        let errors={}
        if(!values.description){
            errors.description='Enter a description'
        }
        else if(values.description.length<5){
            errors.description="Enter atleast 5 characters in Description"
        }
        if(!moment(values.targetDate).isValid()){
            errors.targetDate='Enter a valid Target Date'
        }
        return errors
    }

    onSubmit(values){
        // this.props.navigate(`/todos`)
        let username=AuthenticationService.getUserNameLoggedIn();

        let todo={
            id:this.state.id,
            username:username,
            description:values.description,
            targetDate:values.targetDate
        }
        if(this.state.id===-1){
            TodoService.addTodo(username,todo).then(()=>this.props.navigate('/todos'))
        }
        else{
            TodoService.updateTodo(username,this.state.id,todo).then(()=>this.props.navigate('/todos'))
    
        // this.props.navigate('/todos')
}
    }

   
render(){
    let {description,targetDate} = this.state
    return (<div> 
        <h1>Todo</h1>
        <div className="container">
        <Formik
        initialValues={{description,targetDate}}
        onSubmit={this.onSubmit}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize={true}
        validate={this.validate}
        >
            {
            (props)=>(
            <Form>
                <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
               
                <fieldset className="form-group">
                    <label>Description</label>
                    <Field className="form-control" type="text" name="description"></Field>
                    
                    </fieldset>
                <fieldset className="form-group">
                    <label>Target Date</label>
                    <Field className="form-control" type="date" name="targetDate"></Field>
                    </fieldset>
                <button className="btn btn-success" type="submit">Save</button>
            </Form>
            )
        }
        </Formik>

        </div>
      </div>
    )
    }

}

export default TodoComponent;