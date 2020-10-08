import React from 'react';
import HeaderContainer from './containers/HeaderContainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from './redux/modules/user';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import LoginContainer from './containers/LoginContainer';
import storage from './lib/storeage';

class App extends React.Component {


  initializeUserInfo = async () => {
    const loggedInfo = storage.get('loggedInfo');
    
    if (!loggedInfo) return;

    const { UserActions } = this.props;
    try {
      await UserActions.checkStatus();
      UserActions.setLoggedInfo(loggedInfo);
      
    } catch (e) {
      storage.remove('loggedInfo');
      window.location.href = '/login?expired';
    }
  }
  componentDidMount() {
    this.initializeUserInfo();
  }

  render() {
    return (
      <div>
        <HeaderContainer/>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/reservation/:library_No' component={Reservation}/>
      </div>
    );
  }
}

export default connect(
  (state)=>({
    logged :state.user.get('logged')
  }),
  (dispatch) => {
    return {
      UserActions: bindActionCreators(userActions, dispatch)
    }
  }
)(App);
