
import React from 'react';
import {connect} from 'react-redux';
import {Button, FormGroup, ControlLabel,FormControl} from 'react-bootstrap';

class TeamMake extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      value:''
    };
  }

  render() {
    const {dispatch} = this.props;

    return (
      <div className='subHead'>
        <h2 className='subHead-heading'>나의 팀 생성</h2>
        <p className='subHead-description'>당신의 팀을 생성합니다.</p>
        <form>
          <FormGroup
            controlId="formBasicText">

            <ControlLabel>팀 명</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="팀 이름을 입력하세요"
            />
            <ControlLabel>팀 소개</ControlLabel>
            <FormControl componentClass="textarea" placeholder="소개를 입력하세요" />


          </FormGroup>
          <Button bsStyle="primary" onClick={()=>dispatch({type:'ADD'})}>ok</Button><Button bsStyle="danger">cancel</Button>
        </form>
      </div>
    );
  }
}

TeamMake.defaultProps = {
};

export default connect()(TeamMake);
