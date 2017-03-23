import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './src/stores/configure.js';
import Groups from './src/components/groups.jsx';
import Users from './src/containers/users.js';
import Home from './src/components/home.jsx';
import UserDetail from './src/components/user-detail.jsx';
import GroupDetail from './src/components/group-detail.jsx';


const App = React.createClass({
    // getInitialState() {
    //     return {
    //         route: window.location.hash.substr(1)
    //     }
    // },
    //
    // componentDidMount() {
    //     window.addEventListener('hashchange', () => {
    //         this.setState({
    //             route: window.location.hash.substr(1)
    //         })
    //     })
    // },

    render() {
        // let Child;
        // switch (this.state.route) {
        //     case '/groups':
        //         Child = Groups;
        //         break;
        //     case '/users':
        //         Child = Users;
        //         break;
        //     default:
        //         Child = Home;
        // }

        return (
            <div>
                <ul className="nav nav-tabs">
                    <li role="presentation"><a href="#">Home</a></li>
                    <li role="presentation"><a href="#/groups">Groups</a></li>
                    <li role="presentation"><a href="#/users">Users</a></li>
                </ul>
                {/*
                 next we replace `<Child>` with `this.props.children`
                 the router will figure out the children for us
                 */}
                {this.props.children}
            </div>
        )
    }
});

const store = configureStore();

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="groups" component={Groups}/>
                <Route path="users" component={Users}/>
                <Route path="groups/:groupId" component={GroupDetail}/>
                <Route path="users/:userId" component={UserDetail}/>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));

