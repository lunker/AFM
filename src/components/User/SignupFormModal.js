
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Modal, Button} from 'react-bootstrap';

class SignupFormModal extends React.Component {

  signup(){
    var user={};

    user.id=ReactDOM.findDOMNode(this.refs.id).value;
    user.password=ReactDOM.findDOMNode(this.refs.password).value;

    this.props.signup(user);
  }

  render() {
    return (
      <div className="loginModal">

        <Modal show={this.props.show} onHide={this.props.close}>
          <h3>회원가입</h3>
          <Modal.Body>

            <input type='email' ref='id'/>
            <input type='password' ref='password'/>

            <Button bsStyle='danger' onClick={()=>this.signup()}>회원가입</Button>
          </Modal.Body>

          <Modal.Footer>
            ~~~
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

SignupFormModal.defaultProps = {
};

export default SignupFormModal;
