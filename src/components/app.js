/**
 * This is the main app file where I link together the header and the main pages
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Header from './header/header';
import LeftBar from './leftBar/leftBar';
import SideMenuItems from './sidemenu/sideMenuItems';
import MainPortalContainer from './mainPortalContainer/mainPortalContainer'

import { USER_SIGNEDIN } from '../actions/types';

//temporary needed by material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            automaticSignInDone: false,
            jqxComponentsLoaded: false
        }
    }

    onDrawerAnimation(expanded) {
        this.setState({
            expanded
        });
    }

    componentDidMount() {
        //check if the user was previously logged in in localstorage
        let signedInUser = localStorage.getItem("signedInUser");

        if (signedInUser) {
            signedInUser = JSON.parse(signedInUser);
            this.setState({automaticSignInDone: true});
            this.props.dispatch({
                type: USER_SIGNEDIN,
                payload: {
                    userContactId: signedInUser.userContactId,
                    userName: signedInUser.userName
                }
            });
        }


        this.loadAsset("./thirdParty/jqxWidgets/jqx-all.js", "js", () => {
            this.setState({jqxComponentsLoaded: true});
        });
    }


    loadAsset(filename, filetype, callback) {
        if (filetype == "js") { //if filename is a external JavaScript file
            var fileref = document.createElement('script');
            fileref.setAttribute("type", "text/javascript");
            fileref.setAttribute("src", filename);
            if (callback) {
                fileref.addEventListener('load', callback);
            }
            document.body.appendChild(fileref);
        }
        else if (filetype == "css") { //if filename is an external CSS file
            var fileref = document.createElement("link")
            fileref.setAttribute("rel", "stylesheet")
            fileref.setAttribute("type", "text/css")
            fileref.setAttribute("href", filename);
            if (document.head == null) {
                document.getElementsByTagName('head')[0].appendChild(fileref);
            }
            else {
                document.head.appendChild(fileref);
            }
        }
    }

    componentWillUnmount() {
        console.log("main app will unmount");
    }

    render() {
        if (!this.state.jqxComponentsLoaded) {
            //display a global loading
            return (
                <div>Application is loading</div>
            )
        }
        else {
            return (
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <div>
                        <Header/>
                        <LeftBar onAnimate={this.onDrawerAnimation.bind(this)}>
                            <SideMenuItems/>
                        </LeftBar>
                        <MainPortalContainer>
                            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                                <div className="container-fluid no-gutters portalPageContainer">
                                    {this.props.children}
                                </div>
                            </MuiThemeProvider>
                        </MainPortalContainer>
                    </div>
                </MuiThemeProvider>
            )
        }
    }
}

export default connect(null)(App);