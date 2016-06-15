'use strict';

import React from 'react';
import {connect} from 'react-redux';
import NewTeamModal from './NewTeamModal';
import {Button} from 'react-bootstrap';


class TeamPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      showModal:false
    };
  }

  openModal(){
    // alert("daf");
    // dispatch({test:'test'});
    this.setState({showModal : true});
  }
  closeModal(){
    this.setState({showModal : false});
  }

  go(){
    const item = this.props.item;
    console.log(item);
    // item({type:'ADD'});
    alert('clicked!');

  }
  render() {
    const {dispatch} = this.props;

    return (
      <div>
        {this.props.children}
      </div>

    );
  }
}

TeamPage.defaultProps = {
};

export default connect()(TeamPage);
