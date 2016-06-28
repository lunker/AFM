'use strict';

// var React=require('react');
import React from 'react';
import * as actions from '../../actions/index';
// react-bootstrap
var Button=require('react-bootstrap').Button;
var FormGroup=require('react-bootstrap').FormGroup;
var ControlLabel=require('react-bootstrap').ControlLabel;
var FormControl=require('react-bootstrap').FormControl;
var Row=require('react-bootstrap').Row;
var Col=require('react-bootstrap').Col;
var Grid=require('react-bootstrap').Grid;
// table
var Table=require('react-bootstrap').Table;
var Grid=require('react-bootstrap').Grid;
var Grid=require('react-bootstrap').Grid;


// Facebook-Table
// var Table=require('fixed-data-table').Table;
// var Column=require('fixed-data-table').Column;
// var Cell=require('fixed-data-table').Cell;



var Link=require('react-router').Link;
var async=require('async');


const data=[
  {name:'이동규',age: '26',pos: 'CDM'},
  {name:'이민혁',age: '28',pos: 'CDM'},
  {name: '이성재', age: '26',pos: 'ST'}
];

const TextCell = ({rowIndex, data, col}) => (
  <Cell>
    {data[rowIndex]}
  </Cell>
);

const Marker = ({x,y,id})=>(
  <h5 style='left:{x}'>

  </h5>

);


class TeamFormation extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    console.log('drop event!');
    var data = ev.dataTransfer.getData('text');
    console.log(data);
    const x=ev.screenX;
    const y=ev.screenY;
    ev.target.appendChild(document.getElementById(data));
  }

  render() {
    console.log(data.length);
    return (
      <div>
        <Grid>

          <Row>
            <Col md={2}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>포메이션</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="4231">4-2-3-1</option>
                  <option value="442">4-4-2</option>
                  <option value="433">4-3-3</option>
                  <option value="4411">4-4-1-1</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col
              className='board'
              onDragOver={(event)=>this.allowDrop(event)}
              onDrop={(event)=>this.drop(event)}
              >

            </Col>

            <Col className='lineup'>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>이름</th>
                    <th>나이</th>
                    <th>포지션</th>
                  </tr>
                </thead>
                <tbody>
                  <tr draggable='true' id='row1' onDragStart={(event)=>this.drag(event)}>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default TeamFormation;
