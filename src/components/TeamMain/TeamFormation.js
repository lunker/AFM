'use strict';

// var React=require('react');
import React from 'react';
import * as actions from '../../actions/index';
var Button=require('react-bootstrap').Button;
var Link=require('react-router').Link;
var async=require('async');

class TeamFormation extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <div className='board'>
        <div className='col-lg-8'>
          team formation
        </div>
        <div className='col-lg-4'>

        </div>

      </div>
    );
  }
}

export default TeamFormation;
