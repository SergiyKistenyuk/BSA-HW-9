import React, {Component} from 'react'
import User from './user'
import './usersList.css'

class UsersList extends Component {

    constructor(props){
        super(props);
        this.state = this.props;
    }

    render() {
        const users = this.props.users;
        return (
            (users.length > 0) ? <ul>
                { users.map( (user, index) => {
                    return <li key={user.id.toString()}><User id={user.id} name={user.name} delete={this.props.deleteUser}></User></li>
                })}
            </ul> : null
        );
    }
}
export default UsersList