
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Modal, Button} from 'react-bootstrap';

class LoginModal extends React.Component {

  login(){
    console.log('loginmodal - login()');
    const user={};
    user.id=ReactDOM.findDOMNode(this.refs.id).value;
    user.password=ReactDOM.findDOMNode(this.refs.password).value;
    this.props.login(user).then(this.props.close());
  }

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
            <Button bsStyle='danger' onClick={()=>this.login()}>로그인</Button>
          </Modal.Body>

          <Modal.Footer>
            아직 회원이 아니세요? <Button bsStyle='primary'><Link to='/signup'>회원가입</Link></Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

LoginModal.defaultProps = {
};

export default LoginModal;
