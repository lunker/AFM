'use strict';

import React from 'react';
import NewTeamModal from './NewTeamModal';
import {Button} from 'react-bootstrap';

class TeamCard extends React.component{

  render(){
    return (
      <div className="card text-center">
        <button className="circle icon-plus" onClick={this.openModal.bind(this)}></button>
        <strong> add new team </strong>
        <Button onClick={this.go.bind(this)}>테스트 redux</Button>
        <NewTeamModal show={this.state.showModal} />
      </div>
    );
  }
  
}
