import React, {Component} from 'react'
import PropTypes from 'prop-types';

class User extends Component {

    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.delete(this.props.id);
    }

    render() {
        return (
            <div>
                <div>{this.props.id}. {this.props.name}</div>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

User.propTypes = {
    id: PropTypes.number
};

export default User