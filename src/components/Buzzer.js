import React from 'react';
import BuzzerImage from './BuzzerImage.js';
import BuzzerSound from './BuzzerSound.js';
import LastBuzz from './LastBuzz.js';
import NoConnection from './NoConnection.js';
import Sockette from 'sockette';
import localStorageConfig from '../config/localStorage.js';
import roles from '../config/roles.js';
import websocketConfig from '../config/websocket.js';
import HostButtons from './HostButtons.js';
import sounds from '../config/sounds.js';

class Buzzer extends React.Component {
  constructor(props) {
    super(props);

    this.connection = new Sockette(websocketConfig.address, {
      onmessage: this.onMessage.bind(this),
      onopen: this.onConnectionEstablished.bind(this),
      onclose: this.onConnectionLost.bind(this),
      onreconnect: this.onConnectionLost.bind(this)
    });

    this.state = {
      buzzUser: null,
      isOpen: true,
      hasConnection: false
    };
  }

  onConnectionLost() {
    this.setState({
      hasConnection: false
    });
  }

  onConnectionEstablished() {
    this.setState({
      hasConnection: true
    });
  }

  onBuzz() {
    this.connection.json({
      type: 'buzz',
      user: localStorage.getItem(localStorageConfig.USERNAME)
    });
  }

  onMessage(message) {
    const messageData = JSON.parse(message.data);

    if (messageData.type === 'reopen') {
      this.setState({
        isOpen: true,
        buzzUser: null
      });

      return;
    }

    if (!this.state.isOpen) {
      return;
    }

    if (messageData.type === 'buzz' || messageData.type === 'host-sound') {
      this.setState({
        buzzUser: messageData.user,
        isOpen: false
      });
    }
  }

  onSoundPlayFinished() {
  }

  reset() {
    this.connection.json({
      type: 'reopen'
    });
  }

  playHostSound(soundName) {
    this.connection.json({})

    this.connection.json({
      type: 'host-sound',
      user: soundName
    });
  }


  render() {
    const userRole = localStorage.getItem(localStorageConfig.ROLE);
    const isUserPlayer = (userRole === roles.ROLE_PLAYER);
    const isUserHost = (userRole === roles.ROLE_HOST);

    const hasConnection = this.state.hasConnection;

    return (
      <div>
        <NoConnection hasConnection={this.state.hasConnection} />
        { isUserPlayer && <BuzzerImage onBuzz={() => this.onBuzz()} /> }
        { isUserHost && <LastBuzz buzzUser={this.state.buzzUser} reset={this.reset.bind(this)} /> }
        { isUserHost && <HostButtons onClick={(soundName) => this.playHostSound(soundName)} />}
        { hasConnection && <BuzzerSound buzzUser={this.state.buzzUser} onFinish={() => this.onSoundPlayFinished()} /> }
      </div>
    );
  }
}

export default Buzzer;