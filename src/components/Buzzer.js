import React from 'react';
import BuzzerImage from './BuzzerImage.js';
import BuzzerSound from './BuzzerSound.js';
import LastBuzz from './LastBuzz.js';
import Sockette from 'sockette';
import localStorageConfig from '../config/localStorage.js';
import roles from '../config/roles.js';

class Buzzer extends React.Component {
  constructor(props) {
    super(props);

    this.connection = new Sockette('ws://localhost:8080', {
      onmessage: this.onMessage.bind(this),
      onclose: () => console.log('o noes!')
    });

    this.state = {
      buzzUser: null
    };
  }

  onBuzz() {
    this.connection.json({
      type: 'buzz',
      user: localStorage.getItem(localStorageConfig.USERNAME)
    });
  }

  onMessage(message) {
    const messageData = JSON.parse(message.data);
    this.setState({
      buzzUser: messageData.user
    });
  }

  onSoundPlayFinished() {
  }

  reset() {
    this.setState({
      buzzUser: null
    });
  }


  render() {
    const userRole = localStorage.getItem(localStorageConfig.ROLE);
    const isUserPlayer = (userRole === roles.ROLE_PLAYER);
    const isUserHost = (userRole === roles.ROLE_HOST);

    return (
      <div>
        { isUserPlayer && <BuzzerImage onBuzz={() => this.onBuzz()} /> }
        { isUserHost && <LastBuzz buzzUser={this.state.buzzUser} reset={this.reset.bind(this)} /> }
        <BuzzerSound buzzUser={this.state.buzzUser} onFinish={() => this.onSoundPlayFinished()} />
      </div>
    );
  }
}

export default Buzzer;