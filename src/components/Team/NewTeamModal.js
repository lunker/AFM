
import React from 'react';
import {Link} from 'react-router';
import {Modal,Button} from 'react-bootstrap';

class NewTeamModal extends React.Component {

  render() {
    return (
      <div className="teamModal">
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal head </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button bsStyle="primary" bsSize="large" block onClick={this.props.close}><Link to="/team/newteam">팀 생성</Link></Button>
            <Button bsStyle="primary" bsSize="large" block onClick={this.props.close}><Link to="/teamfind">팀 가입</Link></Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

NewTeamModal.defaultProps = {
};

export default NewTeamModal;
