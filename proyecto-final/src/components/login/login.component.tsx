import React, { Component } from 'react';
import './login.component.scss'
import { User } from '../../models/login.model';


const userJonathan: User = {
    name: 'Jonathan De Jesus',
    id: '1a25ee',
    loginInformation: {
        username: 'jdominguez',
        password: '12345'
    }
}

class LoginForm extends Component {
    state = {
        name: 'Jonathan'
    };

    handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('se envió el formulario');
    }

    render() {
        console.log(userJonathan);
        return <div className="login-form-container">
            <h3>Welcome to Collaborators App</h3>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="password"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    }
}

export default LoginForm;