
import React from 'react';
import NewTeamModal from './NewTeamModal';
import {browserHistory} from 'react-router';


class TeamCard extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      showModal:false
    };

    // this.openTeamInfo = (teamId) => this.openTeamInfo(teamId);
  }

  openTeamInfo(teamId){
    // this.props.showTeamInfo().then();
    console.log(teamId);
    console.log('[TEAM_CARD] call openTeamInfo()');

    browserHistory.push('/team/teaminfo/'+teamId);
  }

  wow(){
    console.log("뭐지 ");
  }

  render() {
    return (

      <div className='row'>
        {this.props.teams.map((team,index) =>
          <div className="card text-center clickable col-md-4" key={index} >
          <div onClick={()=>this.props.openTeamInfo(team._id)}>
            <h1>{team.name} + {team.description}</h1>
          </div>

          </div>
        )}
      </div>

    );
  }
}

TeamCard.defaultProps = {
};

export default TeamCard;
