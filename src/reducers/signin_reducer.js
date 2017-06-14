import { USER_SIGNEDIN, USER_SIGNEDOUT, USER_AVATAR } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case USER_SIGNEDIN:
            return {...state, userIsSignedIn: true, ...action.payload}
        case USER_SIGNEDOUT:
            return {
                ...state, userIsSignedIn: false, userContactId: null, userName: null,
                userIdentityId: null,
                userImage: undefined
            }
        case USER_AVATAR:
            return {...state, userImage: action.payload}

    }

    return state;
}
