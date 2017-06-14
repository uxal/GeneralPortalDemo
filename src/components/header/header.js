import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { BasePath } from '../../config';
import { USER_AVATAR } from '../../actions/types';
import * as actions from '../../actions/signin';

import FlatButton from 'material-ui/FlatButton';
import LinearProgress from 'material-ui/LinearProgress';
import Avatar from 'material-ui/Avatar';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import { amber500 } from 'material-ui/styles/colors';

import styles from './header.css'

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topNavigationBarMenuDisplayed: false
        }
    }

    clickedNavigationMobileToggler() {
        this.setState({
            topNavigationBarMenuDisplayed: !this.state.topNavigationBarMenuDisplayed
        });
    }

    showSigninPage() {
        browserHistory.push(`${BasePath}/signin`);
    }

    /**
     * src={this.props.userImage}
     * @returns {XML}
     */

    render() {

        return (
            <div>
                <nav className="navbar navbar-toggleable-sm navbar-inverse fixed-top bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right" type="button"
                            onClick={this.clickedNavigationMobileToggler.bind(this)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">General Portal Demo</a>
                    <div
                        className={styles.uxalTopNavMenu + " collapse navbar-collapse " + (this.state.topNavigationBarMenuDisplayed ? styles.show : "")}>
                        <ul className="navbar-nav mr-auto">

                        </ul>

                        {
                            !this.props.signedIn ?
                                <FlatButton label="Sign in" secondary={true} onClick={this.showSigninPage}/> :
                                (
                                    <div>
                                        {
                                            this.props.userImage ?
                                                <Avatar src={this.props.userImage} style={{verticalAlign: 'top'}}
                                                        size={40}/> :
                                                <Avatar icon={<AccountCircle
                                                    style={{fill: '#fff', margin: 0, width: 36, height: 36}}/>}
                                                        style={{verticalAlign: 'top'}} size={40}/>
                                        }

                                        <div className={styles.userName}>{this.props.userName}</div>
                                        <FlatButton label="Sign out" secondary={true} onClick={this.props.signOut}
                                                    style={this.props.signedIn ? {marginTop: 1} : null}/>
                                    </div>
                                )
                        }
                    </div>
                </nav>
                /**
                {this.props.displayAjaxLoader ? <LinearProgress mode="indeterminate" color={amber500} style={{
                        position: 'fixed',
                        zIndex: 1031,
                        top: 52
                    }}/> : ""}
                    **/
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        signedIn: state.signinReducer.userIsSignedIn,
        userContactId: state.signinReducer.userContactId,
        userName: state.signinReducer.userName,
        userIdentityId: state.signinReducer.userIdentityId,
        userImage: state.signinReducer.userImage,
        displayAjaxLoader: state.globalReducer.displayAjaxLoader
    };
}

export default connect(mapStateToProps, actions)(Header);