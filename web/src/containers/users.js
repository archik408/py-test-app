import { connect } from 'react-redux'
import { getUsers, getUsersSuccess, getUsersFailure } from '../actions/user';
import Users from '../components/users.jsx';


const mapStateToProps = (state) => {
    return {
        userList: state.user.userList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (id) => {
            // obj.payload: Promise
            dispatch(getUsers(id)).payload.then((response) => {
                !response.error ? dispatch(getUsersSuccess(response)) : dispatch(getUsersFailure(response));
            });
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;