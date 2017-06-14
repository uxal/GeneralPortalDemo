/**
 * This is a container for the main page view which is displayed under the header and at the right of the side menu
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthenticationSnackbar from '../authentication/authenticationSnackbar';

import styles from './mainPortalContainer.css';

class MainPortalContainer extends Component {

    render() {
        return (
            <div
                className={(this.props.useGreyBackground ? styles.portalPageContainerGreyBackground : styles.portalPageContainer) + " " + (this.props.expanded ? styles.sideMenuExpanded : (this.props.onlyIconsWithScrollBar ? styles.sideMenuOnlyIconsExpanded : ""))}>
                {/* And now display all the pages loaded by router below */}
                {this.props.children}
                <AuthenticationSnackbar/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {expanded: state.globalReducer.sideMenuExpanded, useGreyBackground: state.globalReducer.useGreyBackground, onlyIconsWithScrollBar: state.globalReducer.enlargeSideMenu};
}

export default connect(mapStateToProps)(MainPortalContainer);