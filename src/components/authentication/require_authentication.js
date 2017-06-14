/**
 * This is an higher order component has has the role of securing the routes
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/navigation';

export default function (ComposedComponent) {
    class Authentication extends Component {
        constructor(props) {
            super(props);

            this.state = {
                canDisplayElement: false
            }
        }

        componentWillMount() {
            if (!this.props.authenticated) {
                this.props.userNeedsToBeSignedIn(this.props.navigationObject, this.props.previousNavigationObject);
                if (this.state.canDisplayElement)
                {
                    this.setState({canDisplayElement:false});
                }
                return false;
            }
            //user is authenticated I need to check if he's allowed to access the area
            /**
             * Here I would call an API to verify the user token, but this being just a demo, if the user is authenticated, the access is granted everywhere
             */
            this.setState({canDisplayElement: true});
        }

        componentDidUpdate() {
            if (this.state.canDisplayElement) {
                if (!this.props.authenticated) {
                    this.setState({canDisplayElement: true});
                }
                return;
            }
        }


        render() {
            return (this.state.canDisplayElement ? <ComposedComponent {...this.props} /> : <div />)
        }
    }

    function mapStateToProps(state) {
        return {
            authenticated: state.signinReducer.userIsSignedIn,
            navigationObject: state.globalReducer.navigationObject,
            previousNavigationObject: state.globalReducer.previousNavigationObject
        };
    }

    return connect(mapStateToProps, actions)(Authentication);
}