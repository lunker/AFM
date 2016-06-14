
import React from 'react';
import {Link} from 'react-router';
import {Modal,Button} from 'react-bootstrap';

class NewTeamModal extends React.Component {


  render() {
    return (
      <div className="teamModal">
        <Modal show={this.props.show}>
          <Modal.Header closeButton>
            <Modal.Title>Modal head </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button bsStyle="primary" bsSize="large" block><Link to="/team/make">팀 생성</Link></Button>
            <Button bsStyle="primary" bsSize="large" block>팀 가입</Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

NewTeamModal.defaultProps = {
};

export default NewTeamModal;
