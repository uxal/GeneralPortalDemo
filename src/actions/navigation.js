/**
 * This file contains the navigation actions.
 */
import { browserHistory } from 'react-router';
import { BasePath } from '../config';
import { SET_GREY_BACKGROUND, NAVIGATION, USER_NOT_SIGNEDIN, AJAX_LOADER, RESTRICTED_PAGE, COLLAPSE_SIDE_MENU, ENLARGE_SIDE_MENU } from './types';

export function navigation(pageToGo) {
    return (dispatch) => {
        browserHistory.push(`${BasePath}${pageToGo}`);
    }
}

export function navigationFromSideMenu(pageToGoObject) {
    return (dispatch) => {
        dispatch({type: NAVIGATION, payload: pageToGoObject});
        browserHistory.push(`${BasePath}${pageToGoObject.path}`);
    }
}

export function changeBackgroundToGrey(changeIt) {
    return (dispatch) => {
        dispatch({type: SET_GREY_BACKGROUND, payload: changeIt});
    }
}

/**
 * This method is called from breadcrumbs when clicking on a 0 level item. This means user clciked on a menu item which has sub menues. It must open and scroll the correct side menu parent in the correct position
 */
export function manuallyCollapseSideMenuItem(sideMenuItemId) {
    return (dispatch) => {
        dispatch({type: COLLAPSE_SIDE_MENU, payload: sideMenuItemId});
    }
}

/**
 * This action is called when expanding a menu item and if we have scroll bars
 */
export function enlargeSideMenuWidth(enlargeIt) {
    return (dispatch) => {
        dispatch({type: ENLARGE_SIDE_MENU, payload: enlargeIt});
    }
}

/**
 * This is executed when the user is not signed in and tries to access a protected page
 */
export function userNeedsToBeSignedIn(nextNavigationObject, previousNavigationObject) {
    return (dispatch) => {
        dispatch({type: USER_NOT_SIGNEDIN, payload: true});
        if (previousNavigationObject !== undefined) {
            browserHistory.push(`${BasePath}/${previousNavigationObject.path}`);
        }
        else {
            browserHistory.push(`${BasePath}/`);
        }
    }
}
/**
 * This is called from the snackbar to modify the state variable which indicates if the snackbar has to be displayed or not
 */
export function resetNotSignedInNotification() {
    return (dispatch) => {
        dispatch({type: USER_NOT_SIGNEDIN, payload: false});
    }
}

export function userNotAllowedToAccessPage(nextNavigationObject, previousNavigationObject) {
    return (dispatch) => {
        dispatch({type: RESTRICTED_PAGE, payload: true});
        if (previousNavigationObject !== undefined) {
            dispatch({type: NAVIGATION, payload: previousNavigationObject});
            browserHistory.push(`${BasePath}/${previousNavigationObject.path}`);
        }
        else {
            browserHistory.push(`${BasePath}/`);
        }
    }
}

/**
 * This is called from the the snackbar when the bar is closed automatically
 */
export function resetPageRestrictionnNotification() {
    return (dispatch) => {
        dispatch({type: RESTRICTED_PAGE, payload: false});
    }
}

export function displayAjaxLoader(showIt) {
    return (dispatch) => {
        dispatch({type: AJAX_LOADER, payload: showIt});
    }
}
