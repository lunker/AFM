'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {Button, ControlLabel, FormGroup, FormControl, Col, Form} from 'react-bootstrap';

class TeamFindPage extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.state={
      results:[]
    };
  }

  searchTeam(){
    const name = ReactDOM.findDOMNode(this.refs.name).value;

    $.ajax({
      url: 'http://localhost:8888/teams/name/'+name,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({results: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('', status, err.toString());
      }.bind(this)
    });

  }

  render(){
    return (
      <div>
        <h1>Team find page</h1>

        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              팀 이름
            </Col>
            <Col sm={6}>
              <FormControl type="text" placeholder="팀 이름을 입력하세요" ref='name'/>
            </Col>
            <Button sm={2} onClick={()=> this.searchTeam()}>검색</Button>
          </FormGroup>
        </Form>

        <ul>
          {this.state.results.map((result, index) =>
            <div>
              <li key={index}>{result.name} =>> {result.description} <Button >가입신청</Button> </li>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default TeamFindPage;
