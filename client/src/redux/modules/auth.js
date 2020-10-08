import {createAction, handleActions} from 'redux-actions';
import {Map} from 'immutable';
import {pender} from 'redux-pender';
import * as AuthAPI from '../../lib/api/auth';

const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';

export const login = createAction(LOGIN, AuthAPI.authlogin);
export const logout = createAction(LOGOUT);

const initialState = Map({
    result: Map({})
});

export default handleActions({
    ...pender({
        type: LOGIN,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    })
}, initialState)