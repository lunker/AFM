
import React from 'react';

class NewTeam extends React.Component {
  render() {
    return (
      <div className="card text-center">
        <button className="circle icon-plus"></button>
        <strong> add new team </strong>
      </div>
    );
  }
}

NewTeam.defaultProps = {
};

export default NewTeam;
