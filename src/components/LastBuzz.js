import React from 'react';

class LastBuzz extends React.Component {
  reset() {
    this.props.reset();
  }

  render() {
    return (
      <div>
        <p>Last buzz by: {this.props.buzzUser}</p>
        <p className="host-button" onClick={() => this.reset()}>Reset</p>
      </div>
  );
  }
}

export default LastBuzz;