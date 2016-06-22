'use strict';

import React from 'react';
import {Dropdown, MenuItem} from 'react-bootstrap';
import * as UserActions from '../../actions/User';
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

  render (){
    const {isLogin}=this.props;

    return (

      <div>
        <Dropdown id="dropdown-custom-menu">
          <a bsRole="toggle" >
            custom Toggle
          </a>

          {!isLogin &&
            <CustomMenu bsRole="menu">
              <MenuItem eventKey="1" onClick={()=> this.props.openLoginModal()}>로그인</MenuItem>
              <MenuItem eventKey="2" onClick={()=> this.props.openSignupModal()}>회원가입</MenuItem>
              <MenuItem eventKey="3" active>Orange</MenuItem>
            </CustomMenu>
          }

          {isLogin &&
            <CustomMenu bsRole="menu">
              <MenuItem eventKey="1" onClick={()=> this.props.openLoginModal()}>로그인됐다!!!</MenuItem>
            </CustomMenu>
          }

        </Dropdown>


        <LoginModal
          show={this.props.isLoginModalOpened}
          close={()=>this.props.closeLoginModal()}
          login={(user)=>this.props.login(user)}
          openSignupModal={()=>this.props.openSignupModal()}/>

        <SignupModal
          show={this.props.isSignupModalOpened}
          close={()=>this.props.closeSignupModal()}
          openSignupFormModal={()=>this.props.openSignupFormModal()}/>

        <SignupFormModal
          show={this.props.isSignupFormModalOpened}
          close={()=>this.props.closeSignupFormModal()}
          signup={(user)=>this.props.signup(user)}/>
      </div>
    );
  }
}

export default User;
