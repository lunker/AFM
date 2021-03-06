
import React from 'react';
import NewTeamModal from './NewTeamModal';

class NewTeamCard extends React.Component {

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
      <div className="newcard text-center">
        <button className="circle icon-plus" onClick={this.openModal.bind(this)}></button>
        <strong> add new team </strong>

        <NewTeamModal show={this.state.showModal} close={this.closeModal.bind(this)} />
      </div>
    );
  }
}

NewTeamCard.defaultProps = {
};

export default NewTeamCard;
