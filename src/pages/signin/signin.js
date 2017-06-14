import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { USER_SIGNEDIN, AJAX_LOADER } from '../../actions/types';
import * as navigationActions from '../../actions/navigation';
import * as signInActions from '../../actions/signin';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './signin.css';

const style = {
    textAlign: 'center',
    display: 'inline-block',
    width: '100%'
};

const translations = {
    requiredEmail: "Email is required",
    passwordRequired: "Password required",
    wrongEmail: "Email is in wrong format"

}

class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            validationWrongEmail: false,
            validationErrorUserName: false,
            validationErrorPassword: false,
            couldNotAuthenticate: false
        };
    }

    componentWillMount(){
        this.props.changeBackgroundToGrey(true);
    }

    handleSubmit(event) {
        event.preventDefault();

        if (!this.state.email) {
            this.setState({validationErrorUserName: true});
            return false;
        }
        if (!this.state.password) {
            this.setState({validationErrorPassword: true});
            return false;
        }
        //check if the email is correct
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(this.state.email)) {
            this.setState({validationWrongEmail: true});
            return false;
        }
        //everything is ok, contine
        this.signIn();

    }

    handleChange(type, event) {
        switch (type) {
            case "email":
                this.setState({
                    email: event.target.value,
                    validationErrorUserName: false,
                    validationWrongEmail: false,
                    couldNotAuthenticate: false
                });
                break;
            case "password":
                this.setState({
                    password: event.target.value,
                    validationErrorPassword: false,
                    couldNotAuthenticate: false
                });
                break;
        }
    }

    signIn() {
        const _self = this;
        this.props.executeSignin(
            this.state.email,
            this.state.password,
            () => {
                //success function
                _self.props.navigation("/");
            },
            () => {
                //error function
                _self.setState({couldNotAuthenticate: true});
            });
    }

    render() {
        return (
            <div className={"row " + styles.signInPageContainer}>
                <div className="col-md-3 col-sm-3 col-lg-4">
                </div>
                <div className="col-md-6 col-sm-6 col-lg-4">
                    <Paper style={style} zDepth={2} rounded={false}>
                        <h3 className={styles.signInTitle}>Sign in to Demo portal</h3>
                        {this.state.couldNotAuthenticate ?
                            <h6 className={styles.signinError}>User unknown or invalid password</h6> : ""}
                        <form onSubmit={this.handleSubmit}>
                            <TextField hintText="Type your email" floatingLabelText="Email"
                                       onChange={this.handleChange.bind(this, "email")}
                                       errorText={this.state.validationErrorUserName ? translations.requiredEmail : (this.state.validationWrongEmail ? translations.wrongEmail : "")}
                            />
                            <TextField hintText="Type your password" floatingLabelText="Password" type="password"
                                       onChange={this.handleChange.bind(this, "password")}
                                       errorText={this.state.validationErrorPassword ? translations.passwordRequired : ""}
                            />
                            <div className={styles.signInButtonContainer}>
                                <RaisedButton label="Sign in" primary={true} onClick={this.handleSubmit.bind(this)}
                                              type="submit"/>
                            </div>
                        </form>
                    </Paper>
                </div>
            </div>
        )
    }
}

const mapAllActionsToProps = (dispatch) => {
    const boundSignInActions = bindActionCreators(signInActions, dispatch);
    const boundNavigationActions = bindActionCreators(navigationActions, dispatch);
    const allActionProps = {...boundSignInActions, ...boundNavigationActions, dispatch};
    return allActionProps;
}

export default connect(null, mapAllActionsToProps)(Signin);
