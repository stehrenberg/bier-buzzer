import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import blue from '@material-ui/core/colors/blue';

import users from '../config/users';
import localStorageConfig from '../config/localStorage.js';

class Login extends Component {

    constructor(props) {
        super(props);

        const username = localStorage.getItem(localStorageConfig.USERNAME) || null;
        const points = localStorage.getItem(localStorageConfig.POINTS) || 0;
        const role = localStorage.getItem(localStorageConfig.ROLE) || null;

        this.state = {username, points, role};
    }

    render() {

        const { classes, ...props } = this.props;

        return <Dialog open={ !(this.state.username) } onClose={ this.handleClose } aria-labelledby="simple-dialog-title" {...props} >
            <DialogTitle id="simple-dialog-title">Who are you?</DialogTitle>
            <div>
                <List>
                    { users.map(user => (
                        <ListItem button onClick={() => this.handleClose(user)} key={ user.name }>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={ user.name }/>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Dialog>
    }

    handleClose = (user) => {
      this.setState({username: user.name, role: user.role});
      localStorage.setItem(localStorageConfig.USERNAME, user.name);
      localStorage.setItem(localStorageConfig.ROLE, user.role);
      localStorage.setItem(localStorageConfig.POINTS, 0);
    }
}

const styles = {
    avatar: {
        backgroundColor: blue[800],
        color: blue[100],
    },
};

export default withStyles(styles)(Login);