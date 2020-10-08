import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import * as AuthAPI from '../../lib/api/auth';

const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO';
const SET_VALIDATED = 'user/SET_VALIDATED';
const CHECK_STATUS = 'user/CHECK_STATUS';
const LOGOUT = 'user/LOGOUT';

export const setLoggedInfo = createAction(SET_LOGGED_INFO);
export const setValidated = createAction(SET_VALIDATED);
export const checkStatus = createAction(CHECK_STATUS,AuthAPI.checkStatus);
export const logout = createAction(LOGOUT);

const initialState = Map({
    loggedInfo : Map({
        username:null
    }),
    logged : false,
    validated: false,
    result: Map({})
});

export default handleActions({
    [SET_LOGGED_INFO]: (state,action) => state.set('loggedInfo', Map(action.payload)).set('logged',true),
    [SET_VALIDATED]: (state,action) => state.set('validated', action.payload),
    [LOGOUT] : (state,action)=> initialState,
    ...pender({
        type: CHECK_STATUS,
        onSuccess: (state,action) =>state.set('result', Map(action.payload.data)).set('validated',true).set('logged',true),
        onFailure: (state,action) => initialState
    })
}, initialState);