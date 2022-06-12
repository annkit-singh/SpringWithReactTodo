import axios from 'axios';

class HelloWorldService {
    retrieveHelloWorld(){
        return "Hello World react only";
    }

    retrieveHelloFromReact(){
      return  axios.get("http://localhost:8080/hello")
    }

    retrieveBean(){
        return  axios.get("http://localhost:8080/helloclass")
      }

    retrieveBeanWithParameters(val){
      let username='user'
      let password='889922'
      let basicAuthHeader='Basic '+window.btoa(username+":"+password)
        return  axios.get(`http://localhost:8080/helloclass/${val}`,
        {
          headers:{
            authorization: basicAuthHeader
          }
        }
        )
      }

}

export default new HelloWorldService()