'use strict';

import React from 'react';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import NewTeamModal from './NewTeamModal';
import NewTeamCard from './NewTeamCard';
import TeamCard from './TeamCard';
import * as actions from '../../actions/index';
import * as TeamMainActions from '../../actions/TeamMain';


var async=require('async');


class TeamPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      showModal:false
    };
  }

  componentDidMount(){
    // 초기 팀 가져오기.
    this.props.dispatch(actions.getTeams());
  }

  openTeamInfo(teamId){

    console.log('team id ; ' + teamId);
    const {dispatch}=this.props;

    async.waterfall([

      function(callback){
        dispatch(TeamMainActions.selectTeam(teamId));
        callback(null);
      },
      function(callback){
        dispatch(actions.getTeamById(teamId));
        callback(null);
      },
      function(callback){
        // browserHistory.push('/teaminfo/'+teamId);
        browserHistory.push('/m');
      }
    ]);
  }

  render() {
    const {dispatch, items, isFetching} = this.props;

    return (
      <div>
        <h1>team main page</h1>
        <NewTeamCard />

        {items.length >0 &&
          <TeamCard teams={items} openTeamInfo={(teamId)=> this.openTeamInfo(teamId)}/>
        }
        {this.props.children}
      </div>
    );
  }
}

TeamPage.defaultProps = {
};

function mapStateToProps(state){

  const {teamReducer} = state;
  const {items, isFetching} = teamReducer;

  return {
    teamReducer,
    items,
    isFetching
  };
}

export default connect(mapStateToProps)(TeamPage);
