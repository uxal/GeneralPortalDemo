/**
 * Created by dragos on 14/02/2017.
 */
import { USER_SIGNEDIN, USER_SIGNEDOUT, USER_AVATAR, AJAX_LOADER } from './types';


export function executeSignin(email, password, onSignInSuccess, onSignInError) {
    return function (dispatch) {

        /**
         * Here I would call a sign in API, but for this public github I'm moking a result.
         */
            //save a dummy name in localstorage
        const dummyUser = {
                userContactId: 1,
                userName: "Joe Doe",
            };

        localStorage.setItem("signedInUser", JSON.stringify(dummyUser))

        //console.log(localStorage.getItem("signedInUser"));

        dispatch({
            type: USER_SIGNEDIN,
            payload: {
                userContactId: dummyUser.userContactId,
                userName: dummyUser.userName,
            }
        });
        onSignInSuccess();
        dispatch({type: AJAX_LOADER, payload: false});
    }
}

export function signOut() {
    localStorage.removeItem("signedInUser");
    return function (dispatch) {
        dispatch({type: USER_SIGNEDOUT});
    }
}