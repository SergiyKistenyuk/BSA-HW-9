import AddUser from './addUser'
import UsersList from './usersList'
import React, {Component} from 'react'
import './userApp.css'

class UserApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            users : []
        };
        this.lastUserId = 1;

        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.validate = this.validate.bind(this);
    }

    addUser(user) {
        if(this.validate(user.name)){
            this.setState({ users: [...this.state.users, {name: user.name, id: this.lastUserId++}] })
        } else {
            alert (`User ${user.name} already exist`);
        }
    }

    validate(name){
        let users = this.state.users;
        let result = true;
        for(let i = 0; i < users.length; i++) {
            if(name === users[i].name) {
                result = false;
                break;
            }
        }
        return result;
    }

    deleteUser(userId) {
        let users = this.state.users;
        for(let i = 0; i < users.length; i++) {
            if(userId === users[i].id) {
                users.splice(i, 1);
                break;
            }
        }
        this.setState({ users: users });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.users.length !== this.state.users.length) {
            console.log('UPDATE');
            return true;
        } else {
            console.log('NOT UPDATE');
            return false;
        }
    }

    render() {
        return (
        <div className="block">
            <AddUser add={this.addUser}/>
            <UsersList users={this.state.users} deleteUser={this.deleteUser}/>
        </div>
        );
    }
}

export default UserApp