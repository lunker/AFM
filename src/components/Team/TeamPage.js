'use strict';

import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import NewTeamModal from './NewTeamModal';
import TeamCard from './TeamCard';

class TeamPage extends React.Component {

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
    const {dispatch} = this.props;

    return (
      <div>
        <h1>team main page</h1>
        <TeamCard />
        {this.props.children}
      </div>
    );
  }
}

TeamPage.defaultProps = {
};

export default connect()(TeamPage);
