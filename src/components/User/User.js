'use strict';

import React from 'react';
import {Dropdown, MenuItem} from 'react-bootstrap';
import UserActions from '../../actions/User';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import SignupFormModal from './SignupFormModal';

class CustomMenu extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = { value: '' };
    this.onChange = e => this.setState({ value: e.target.value });
  }

  render() {

    return (
      <div
        className={"dropdown-menu"}
        style={{ padding: ''}}
      >
        <input
          ref={input => this.input = input}
          type="text"
          className="form-control"
          placeholder="type to filter..."
          onChange={this.onChange}
          value={this.state.value}
        />
        <ul className="list-unstyled">
          { this.filterChildren() }
        </ul>
      </div>
    );
  }

  filterChildren() {
    let { children } = this.props;
    let { value } = this.state;
    let filtered = [];

    let matches = child => child.props.children.indexOf(value) !== -1;

    React.Children.forEach(children, child => {
      if (!value.trim() || matches(child)) {
        filtered.push(child);
      }
    });

    return filtered;
  }

  focusNext() {
    let input = ReactDOM.findDOMNode(this.input);

    if (input) {
      input.focus();
    }
  }
}

class User extends React.Component{

  constructor(props){
    super(props);

    this.state={
      isLoginModalOpened: false,
      isSignupModalOpened: false,
      isSignupFormModalOpened: false
    }
  }

  openLoginModal(){
    this.setState({isLoginModalOpened: true});
  }
  closeLoginModal(){
    this.setState({isLoginModalOpened: false});
  }

  openSignupModal(){
    this.setState({isSignupModalOpened: true});
  }
  closeSignupModal(){
    this.setState({isSignupModalOpened: false});
  }

  openSignupFormModal(){
    this.closeSignupModal();
    this.setState({isSignupFormModalOpened: true});
  }
  closeSignupFormModal(){
    this.setState({isSignupFormModalOpened: false});
  }

  render (){
    const {isLogin}=this.props;

    return (

      <div>
        <Dropdown id="dropdown-custom-menu">
          <a href="#" bsRole="toggle" >
            custom Toggle
          </a>

          {!isLogin &&
            <CustomMenu bsRole="menu">
              <MenuItem eventKey="1" onClick={()=> this.openLoginModal()}>로그인</MenuItem>
              <MenuItem eventKey="2" onClick={()=> this.openSignupModal()}>회원가입</MenuItem>
              <MenuItem eventKey="3" active>Orange</MenuItem>
            </CustomMenu>
          }

          {isLogin &&
            <CustomMenu bsRole="menu">
              <MenuItem eventKey="1" onClick={()=> this.openLoginModal()}>로그인됐다!!!</MenuItem>
            </CustomMenu>
          }

        </Dropdown>

        <LoginModal
          show={this.state.isLoginModalOpened}
          close={()=>this.closeLoginModal()}
          login={(user)=>this.props.login(user)} />

        <SignupModal
          show={this.state.isSignupModalOpened}
          close={()=>this.closeSignupModal()}
          opensignup={()=>this.openSignupFormModal()}/>

        <SignupFormModal
          show={this.state.isSignupFormModalOpened}
          close={()=>this.closeSignupFormModal()}
          signup={(user)=>this.props.signup(user)}/>
      </div>
    );
  }
}

export default User;
