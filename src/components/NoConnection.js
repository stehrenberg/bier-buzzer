import React from 'react';
import loader from '../assets/img/ajax-loader.gif';

class NoConnection extends React.Component {
  render() {
    const hasNoConnection = !this.props.hasConnection;

    return (
      <div>
        { hasNoConnection &&
          <div id="no-connection">
             Connecting to server
            <img src={loader} alt="" />
          </div>
        }
      </div>
    )
  }
}

export default NoConnection;