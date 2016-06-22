
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class TeamInfo extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  componentWillMount(){
    // const {dispatch, isFetching, teamInfo}=this.props;
    // dispatch(actions.getTeamById(this.props.params.team_id));
  }

  componentDidMount(){
    // fetch team info
    // const teamId = this.props.params.team_id;
    // const {dispatch, isFetching, teamInfo}=this.props;
    // console.log(teamInfo);
  }

  render() {
    const {dispatch, isFetching, teamInfo}=this.props;
    return (
      <div>
      {!isFetching &&
        <div>
          <h1>team name : {teamInfo[0].name}</h1>
          team description : {teamInfo[0].description}
          
        </div>
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


export default connect(mapStateToProps)(TeamInfo);
