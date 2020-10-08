import React, { Component } from 'react';
import Login from '../components/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../redux/modules/auth';
import * as userActions from '../redux/modules/user';
import storage from '../lib/storeage';
class LoginContainer extends Component {

    handleLogin= (id, pw)=> {
        const {UserActions, AuthActions} = this.props;
        
        AuthActions.login(id,pw).then(()=>{
            UserActions.setLoggedInfo({username:id});
            storage.set('loggedInfo',{username:id});
            this.props.history.push("/");
        }
        ).catch((e)=>{
            console.log(e);
        });
        
    }

    render() {
        const{handleLogin}=this
        return (
            <Login onLogin={handleLogin} />
        );
    }
}

export default connect(
    (state) => ({

        result: state.auth.get('result'),
        loggedInfo :state.user.get('loggedInfo'),
        logged: state.user.get('logged')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(LoginContainer);