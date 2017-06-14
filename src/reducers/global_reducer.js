import { ANIMATE_SIDEMENU, AJAX_LOADER, SET_GREY_BACKGROUND, NAVIGATION, USER_NOT_SIGNEDIN, RESTRICTED_PAGE, COLLAPSE_SIDE_MENU, ENLARGE_SIDE_MENU } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case ANIMATE_SIDEMENU:
            return {...state, sideMenuExpanded: action.payload};
        case AJAX_LOADER:
            return {...state, displayAjaxLoader: action.payload};
        case SET_GREY_BACKGROUND:
            //in action payload we have a true or false value
            return {...state, useGreyBackground: action.payload};
        case NAVIGATION:
            return {
                ...state,
                previousNavigationObject: state.navigationObject !== null ? state.navigationObject : state.previousNavigationObject,
                navigationObject: action.payload
            };
        case USER_NOT_SIGNEDIN:
            return {...state, userNotSignedInWantedToAccessProtectedPage: action.payload, navigationObject: undefined}
        case RESTRICTED_PAGE:
            return {...state, restrictedPageNotification: action.payload}
        case COLLAPSE_SIDE_MENU:
            return {...state, manuallyCollapseSideMenuItem: action.payload}
        case ENLARGE_SIDE_MENU:
            return {...state, enlargeSideMenu: action.payload}
    }

    return state;
}
