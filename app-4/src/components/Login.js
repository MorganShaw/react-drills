import React from "react";

class Login extends React.Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
          }
        
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUsernameChange(name){
        this.setState({
            username: name
        })
    }
    
    handlePasswordChange(pass){
        this.setState({
            password: pass
        })
    }
    
    handleLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="username" onChange={e => this.handleUsernameChange(e.target.value)}/>
                <input type="text" placeholder="password" onChange={e => this.handlePasswordChange(e.target.value)}/>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }

}










export default Login