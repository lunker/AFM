
import React from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, ControlLabel,FormControl} from 'react-bootstrap';
import * as actions from '../../actions/index';
import { browserHistory } from 'react-router';

class TeamMake extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      value:''
    };
  }

  clearVal(){
    this.refs.teamName.value='';
    this.refs.teamDescription.value='';
    browserHistory.push('/team');
    this.props.dispatch(actions.getTeams());
  }

  makeNewTeam(){
    var team={
      name: this.refs.teamName.value,
      description: this.refs.teamDescription.value
    };

    console.log('makeNewTeam() - ' + this.refs.teamName.value);
    this.props.dispatch(actions.makeNewTeam(team)).then(this.clearVal.bind(this));
  }

  render() {
    const {dispatch}=this.props;
    const {teams, isFetching}=this.props;

    return (
      <div className='subHead'>
        <h2 className='subHead-heading'>나의 팀 생성</h2>
        <p className='subHead-description'>당신의 팀을 생성합니다.</p>

        {!isFetching &&
          <div><h1>대기중!대기중!대기중!대기중!대기중!</h1></div>
        }
        <form>
          <FormGroup
            controlId="formBasicText">

            <ControlLabel>팀 명</ControlLabel>
            <input type="text" placeholder="팀 이름을 입력하세요" ref="teamName" />

            <ControlLabel>팀 종목</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>

            <ControlLabel>팀 소개</ControlLabel>
            <input type="textarea" placeholder="소개를 입력하세요" ref="teamDescription" />

          </FormGroup>
          <Button bsStyle="primary" onClick={this.makeNewTeam.bind(this)}>ok</Button><Button bsStyle="danger">cancel</Button>
        </form>
      </div>
    );
  }
}

TeamMake.defaultProps = {
};

function mapStateToProps(state){

  const {teamReducer} = state;
  const {isFetching} = teamReducer;

  return {
    teamReducer,
    isFetching
  };
}

export default connect(mapStateToProps)(TeamMake);
