import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import storage from '../lib/storeage';
import * as userActions from '../redux/modules/user';
import { bindActionCreators } from 'redux';


class HeaderContainer extends React.Component{
    handleLogout=()=>{
        const {UserActions} = this.props;
        storage.remove('loggedInfo');
        UserActions.logout();
        window.location.href='/';
    }
    render(){
        return(
            <div>
              <Header logged={this.props.logged} onLogout = {this.handleLogout}/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        logged: state.user.get('logged')
    }),
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(HeaderContainer);