'use strict';
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import UserComp from '../User/User';
import * as UserActions from '../../actions/User';

class NavBar extends React.Component {

  login(user){
    console.log('navbar- login()');

    const{dispatch}=this.props;
    dispatch(UserActions.login(user));
  }

  signup(user){
    const{dispatch}=this.props;
    dispatch(UserActions.signup(user));
  }

  render() {
    const{dispatch, isLogin}=this.props;

    return (
      <div className="navigation">
        <ul>
          <li><Link to="/">AFM</Link></li>
          <li><Link to="/team">i1</Link></li>
          <li>i2</li>
          <li>i3</li>
        </ul>

        <UserComp login={(user)=>this.login(user)} signup={(user)=>this.signup(user)} isLogin={this.props.isLogin}/>
      </div>
    );
  }
}

NavBar.defaultProps = {
};

function mapStateToProps(state){

  const {UserReducer} = state;
  const {isLogin, id} = UserReducer;

  return {
    UserReducer,
    isLogin,
    id
  };
}

export default connect(mapStateToProps)(NavBar);
