'use strict';

// var React=require('react');
import React from 'react';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

var Button=require('react-bootstrap').Button;
var Link=require('react-router').Link;
var async=require('async');

class TeamMainPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  openTeamFormation(){
    browserHistory.push('m/formation');
  }

  render() {
    const{teamInfo}=this.props;
    return (

      <div id='wrapper'>
        <div id='page-wrapper' className='page-wrapper'>
            {this.props.children}
        </div>
      </div>

    );
  }
}

function mapStateToProps(state){

  const {teamReducer} = state;
  const {teamInfo} = teamReducer;

  return {
    teamInfo
  };
}

export default connect(mapStateToProps)(TeamMainPage);
