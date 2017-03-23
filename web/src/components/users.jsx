import React from 'react'

export default class Users extends React.Component {
    constructor() {
        super();
        this.edit = this.edit.bind(this)
    }
    edit(id) {
        this.context.router.push(`/users/${id}`);
    }

    componentWillMount() {
        this.props.getUsers();
    }

    renderUsers(users) {
        return users && users.map((user) => {
            return (
                <tr>
                    <td>{user.pk}</td>
                    <td>{user.fields.firstName}</td>
                    <td>{user.fields.lastName}</td>
                    <td>{user.fields.email}</td>
                    <td><button onClick={() => this.edit(user.pk)}>Edit</button></td>
                </tr>
            );
        }) || '';
    }

    render() {
        const { users, loading, error } = this.props.userList;

        if(loading) {
            return <div className="container"><h1>Users</h1><h3>Loading...</h3></div>
        }

        if(error) {
            return <div className="alert alert-danger">Error: {error.message}</div>
        }

        return (
            <div>
                <h1>Users</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderUsers(users)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
};

Users.contextTypes = {
    router: React.PropTypes.object.isRequired
};