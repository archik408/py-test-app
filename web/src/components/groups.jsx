import React from 'react'

export default class Groups extends React.Component{
    constructor() {
        super();
        this.edit = this.edit.bind(this)
    }
    edit(event) {
        event.preventDefault();
        const id = event.target.elements[0].value.toLowerCase();
        this.context.router.push(`/group-detail/${id}`);
    }
    render() {
        return (
            <div>
                <h1>Groups</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td><button onClick={this.edit}>Edit</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
};

Groups.contextTypes = {
    router: React.PropTypes.object.isRequired
};