import React from 'react'

export default class UserDetail extends React.Component {
    render() {
        return (
            <div>
                <h1>User Detail</h1>
                <form>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                    <div class="form-group">
                        <label for="first">Firstname:</label>
                        <input type="text" class="form-control" id="first" />
                    </div>
                    <div class="form-group">
                        <label for="last">Lastname:</label>
                        <input type="text" class="form-control" id="last" />
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail:</label>
                        <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="form-group">
                        <label for="sel1">Group list:</label>
                        <select class="form-control" id="sel1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
            </div>
        )
    }
};