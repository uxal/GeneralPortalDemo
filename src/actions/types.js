/**
 * Define all your redux types here
 */

export const ANIMATE_SIDEMENU = 'animate_sidemenu';
export const SET_GREY_BACKGROUND = 'set_grey_background';
export const USER_SIGNEDIN = 'user_signedin';
export const USER_SIGNEDOUT = 'user_signedout';
export const USER_AVATAR = 'user_avatar';
export const AJAX_LOADER = 'ajax_loader';
export const NAVIGATION = 'navigation';

/**
 * this is used in the require_authentication component when the user is not signed in. It has the role to display the snackbar
 * @type {string}
 */
export const USER_NOT_SIGNEDIN = 'user_not_signedin';

/**
 *
 */
export const RESTRICTED_PAGE = 'restricted_page';

/**
 *  This type is used when the user clicks in the breadcrumbs on a root level which has submenues
 */
export const COLLAPSE_SIDE_MENU = 'collapse_side_menu';

/**
 * This type is used when the side menu is automatically scrolled after opening a sub menu if scroll bars do apear on that container
 */
export const ENLARGE_SIDE_MENU = 'enlarge_side_menu';