import React from 'react';

class LastBuzz extends React.Component {
  reset() {
    this.props.reset();
  }

  render() {
    return (
      <div>
        <p>Current mode: {this.props.mode}</p>
        {this.props.lastBuzzBy.map(buzz => {
          const date = new Date(buzz.time)
          return <p>Last buzz by: {buzz.user} ({date.getHours()}:{date.getMinutes()}:{date.getSeconds()}.{date.getMilliseconds()})</p>
        })}
        <p className="host-button" onClick={() => this.reset()}>Reset</p>
      </div>
  );
  }
}

export default LastBuzz;