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

class Login extends Component {

    constructor(props) {
        super(props);

        const username = localStorage.getItem("user") || null;
        const points = localStorage.getItem("points") || 0;
        const role = localStorage.getItem("role") || null;

        this.state = {username, points, role};
    }

    render() {

        const { classes, ...props } = this.props;

        return <Dialog open={ !(this.state.username) } onClose={ this.handleClose } aria-labelledby="simple-dialog-title" {...props} >
            <DialogTitle id="simple-dialog-title">Who are you?</DialogTitle>
            <div>
                <List>
                    { users.map(name => (
                        <ListItem button onClick={() => this.handleClose(name)} key={ name }>
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={ name }/>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Dialog>
    }

    handleClose = (value) => this.setState({username: value});
}

const styles = {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
};

export default withStyles(styles)(Login);