import { Fragment, useState, useEffect, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';

class UserFinder extends Component {
    static contextType = UsersContext;
    state = {
        fUsers: [],
        search: ''
    };
    componentDidMount = () => {
        this.setState({fUsers: this.context.users});
    }
    searchChangeHandler = (event) => {
        this.setState({search: event.target.value})
    };
    componentDidUpdate = (pP, pS) => {
        if (this.state.fUsers === pS.fUsers) {
            this.setState({
                fUsers: this.context.users.filter((user) => user.name.includes(this.state.search))
            })
        }
    };
    render() {
        return(
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler} />
                </div>
                <Users users={this.state.fUsers} />
            </Fragment>
        )
    }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//    searchChangeHandler = (event) => {
//     this.setState()
//   };

//   return (
    
//   );
// };

export default UserFinder;