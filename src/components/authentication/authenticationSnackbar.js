import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/navigation';
import Snackbar from 'material-ui/Snackbar';
import { red500 } from 'material-ui/styles/colors';

class AuthenticationSnackbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoHideDuration: 4000,
            message: 'You must be signed in to access this page',


        };
    }

    handleActionTouchTap = () => {
        this.props.navigation('/signin');
    };

    handleRequestClose = () => {
        if (this.props.userNotSignedInWantedToAccessProtectedPage) {
            this.props.resetNotSignedInNotification();
        }
        else if (this.props.restrictedPageNotification) {
            this.props.resetPageRestrictionnNotification();
        }
    };

    render() {
        return (
            <Snackbar
                open={this.props.open}
                message={this.props.message}
                action={this.props.showActionButton ? "sign in" : null}
                autoHideDuration={this.state.autoHideDuration}
                onActionTouchTap={this.handleActionTouchTap}
                onRequestClose={this.handleRequestClose}
                bodyStyle={{backgroundColor: '#292b2c'}}
                contentStyle={{color: red500, fontWeight: 'bold'}}
            />
        )
    }

}

function reduceOpenState(state) {
    if (state.globalReducer.userNotSignedInWantedToAccessProtectedPage === true) {
        return true;
    }
    if (state.globalReducer.restrictedPageNotification === true) {
        return true;
    }
    return false;
}

function mapStateToProps(state) {
    return {
        open: reduceOpenState(state),
        message: (state.globalReducer.userNotSignedInWantedToAccessProtectedPage === true ? 'You must be signed in to access this page' : (state.globalReducer.restrictedPageNotification === true ? 'You are not allowed to access this page' : '')),
        showActionButton: state.globalReducer.restrictedPageNotification !== true,
        userNotSignedInWantedToAccessProtectedPage: state.globalReducer.userNotSignedInWantedToAccessProtectedPage,
        restrictedPageNotification: state.globalReducer.restrictedPageNotification

    };
}

export default connect(mapStateToProps, actions)(AuthenticationSnackbar);