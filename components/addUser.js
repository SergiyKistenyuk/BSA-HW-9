import React, {Component} from 'react'
import './addUser.css'

class AddUser extends Component {

    constructor(props){
        super(props);
        this.state = {name: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.validate(this.state.name)) {
            this.props.add(this.state);
            this.setState({name: ''});
        }
    }

    validate(name){
        if (name.trim() !== '') {
            return true;
        }
    }

    onNameChange(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User name:</label><br />
                    <input type="text" value={this.state.name} onChange={this.onNameChange}/>
                </div>
                <input type="submit" value="Add" />
            </form>
        );
    }
}

export default AddUser