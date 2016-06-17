
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class TeamInfo extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  componentDidMount(){
    // fetch team info
    const teamId = this.props.params.team_id;
    // dispatch(actions.getTeamById(teamId));
  }

  render() {
    const {dispatch, isFetching, teamInfo}=this.props;
    return (
      <div>
      {!isFetching &&
        <h1>team name : {teamInfo.name}</h1>
      }

      </div>
    );
  }
}

TeamInfo.defaultProps = {
};

function mapStateToProps(state){

  const {teamReducer} = state;
  const {items, isFetching, teamInfo} = teamReducer;

  return {
    teamReducer,
    items,
    isFetching,
    teamInfo
  };
}


export default TeamInfo;
