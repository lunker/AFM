
import React from 'react';
import NewTeamModal from './NewTeamModal';

class TeamApp extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      showModal:false
    };
  }

  openModal(){
    // alert("daf");
    this.setState({showModal : true});
  }
  closeModal(){
    this.setState({showModal : false});
  }

  render() {
    return (

      <div className="card text-center">
        <button className="circle icon-plus" onClick={this.openModal.bind(this)}></button>
        <strong> add new team </strong>

        <NewTeamModal show={this.state.showModal}/>
      </div>
      /*
      <div>
        <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)} animation={true}>
          <Modal.Header>
            h!
          </Modal.Header>
          <Modal.Body>
            <h4>test</h4>
          </Modal.Body>
        </Modal>
      </div>
      */
    );
  }
}

TeamApp.defaultProps = {
};

export default TeamApp;
