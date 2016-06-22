'use strict';

// var React=require('react');
import React from 'react';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

var Button=require('react-bootstrap').Button;
var Link=require('react-router').Link;
var async=require('async');

class TeamMain extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  openTeamFormation(){
    browserHistory.push('m/formation');
  }

  render() {
    const{teamInfo}=this.props;
    return (
      <div>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div className='stat panel panel-primary'>
              <div className='panel-heading'>
                <div className='panel-title row'>
                  <h5>뭐셔 다 이게 ... {teamInfo.name}</h5>
                  <Button onClick={()=>this.openTeamFormation()}>포지션짜기</Button>
                </div>
              </div>
              <div className='panel-body'></div>
              <div className='panel-footer'></div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'></div>
        </div>

        <div className='row'>
          <div className='col-lg-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <span className='panel-title'><i className='fa fa-bell fa-fw'></i>
                <span>경기일정</span>
                </span>
              </div>
              <div className='panel-body'>
                일정!
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <span className='panel-title'><i className='fa fa-bell fa-fw'></i>
                <span>Notification</span>
                </span>
              </div>
              <div className='panel-body'>
                panel-body
              </div>
            </div>
          </div>
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



export default connect(mapStateToProps)(TeamMain);
