
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Modal, Button} from 'react-bootstrap';

class SignupModal extends React.Component {

  render() {
    return (
      <div className="loginModal">
        <Modal show={this.props.show} onHide={this.props.close}>

          <Modal.Body>
            <Button bsStyle="primary" bsSize="large" block onClick={this.props.close}>페이스북</Button>
            <Button bsStyle="primary" bsSize="large" block onClick={this.props.close}>페이스북</Button>
            <hr></hr>
            <input type='email' ref='id'/>
            <input type='password' ref='password'/>

            <Button bsStyle='danger' onClick={()=>this.props.opensignup()}>이메일로 회원가입</Button>
          </Modal.Body>

          <Modal.Footer>
            ~~~
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

SignupModal.defaultProps = {
};

export default SignupModal;
