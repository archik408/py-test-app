import React from 'react'

export default class GroupDetail extends React.Component {
    render() {
        return (
            <div>
                <h1>Group Detail</h1>
                <form>
                    <div class="form-group">
                        <label for="name">Group:</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div class="form-group">
                        <label for="title">Title:</label>
                        <input type="text" class="form-control" id="title" />
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }
};