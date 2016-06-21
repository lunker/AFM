'use strict';
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import UserComp from '../User/User';
import * as UserActions from '../../actions/User';

class NavBar extends React.Component {

  login(user){
    const{dispatch}=this.props;
    dispatch(UserActions.login(user)).then(this.closeLoginModal());
  }

  signup(user){
    const{dispatch}=this.props;
    dispatch(UserActions.signup(user));
  }

  openLoginModal(){
    const{dispatch}=this.props;
    dispatch(UserActions.openLoginModal());
  }
  closeLoginModal(){
    const{dispatch}=this.props;
    dispatch(UserActions.closeLoginModal());
  }
  openSignupModal(){
    const{dispatch}=this.props;
    this.closeLoginModal();
    dispatch(UserActions.openSignupModal());
  }
  closeSignupModal(){
    const{dispatch}=this.props;
    dispatch(UserActions.closeSignupModal());
  }
  openSignupFormModal(){
    const{dispatch}=this.props;
    this.closeSignupModal();
    dispatch(UserActions.openSignupFormModal());
  }
  closeSignupFormModal(){
    const{dispatch}=this.props;
    dispatch(UserActions.closeSignupFormModal());
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

        <UserComp
          isLoginModalOpened={this.props.isLoginModalOpened}
          isSignupModalOpened={this.props.isSignupModalOpened}
          isSignupFormModalOpened={this.props.isSignupFormModalOpened}
          openLoginModal={()=>this.openLoginModal()}
          closeLoginModal={()=>this.closeLoginModal()}
          openSignupModal={()=>this.openSignupModal()}
          closeSignupModal={()=>this.closeSignupModal()}
          openSignupFormModal={()=>this.openSignupFormModal()}
          closeSignupFormModal={()=>this.closeSignupFormModal()}

          login={(user)=>this.login(user)}
          signup={(user)=>this.signup(user)}
          isLogin={this.props.isLogin}/>

      </div>
    );
  }
}

NavBar.defaultProps = {
};

function mapStateToProps(state){

  const {UserReducer} = state;
  const {isLogin, id, isLoginModalOpened , isSignupModalOpened, isSignupFormModalOpened} = UserReducer;

  return {
    UserReducer,
    isLogin,
    id,
    isLoginModalOpened,
    isSignupModalOpened,
    isSignupFormModalOpened
  };
}

export default connect(mapStateToProps)(NavBar);
