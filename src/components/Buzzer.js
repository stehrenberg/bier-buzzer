import React from 'react';
import BuzzerImage from './BuzzerImage.js';
import NailImage from './NailImage.js';
import BuzzerSound from './BuzzerSound.js';
import LastBuzz from './LastBuzz.js';
import NoConnection from './NoConnection.js';
import Sockette from 'sockette';
import localStorageConfig from '../config/localStorage.js';
import roles from '../config/roles.js';
import websocketConfig from '../config/websocket.js';
import HostButtons from './HostButtons.js';

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
      lastBuzzBy: [],
      isOpen: true,
      mode: 'normal',
      hasConnection: false,
      canNail: true
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
      user: localStorage.getItem(localStorageConfig.USERNAME),
      time: new Date().getTime()
    });
  }

  onNail() {
    if (this.state.canNail && this.state.isOpen) {
      this.connection.json({
        type: 'nail',
        user: localStorage.getItem(localStorageConfig.USERNAME),
        time: new Date().getTime()
      });

      this.setState({
        canNail: false
      });
    }
  }

  onMessage(message) {
    const messageData = JSON.parse(message.data);

    if (messageData.type === 'reopen') {
      this.setState({
        isOpen: true,
        buzzUser: null,
        lastBuzzBy: []
      });

      return;
    }

    if (messageData.type === 'change-mode') {
      this.setState({
        mode: messageData.modeName,
        buzzUser: null,
        lastBuzzBy: [],
        isOpen: true,
      });

      return;
    }

    if (messageData.type === 'host-sound') {
      this.setState({
        buzzUser: messageData.user,
      });
    }

    if (!this.state.isOpen) {
      const lastBuzzBy = [...this.state.lastBuzzBy]
      lastBuzzBy.push({
        user: messageData.user,
        time: messageData.time
      });

      this.setState({
        buzzUser: null,
        lastBuzzBy,
      });

      return;
    }

    if (messageData.type === 'nail') {
      const lastBuzzBy = [...this.state.lastBuzzBy]
      lastBuzzBy.push({
        user: `${messageData.user} (Nageln)`,
        time: messageData.time
      });

      this.setState({
        buzzUser: 'nail',
        lastBuzzBy,
        isOpen: false 
      });
    }

    if (messageData.type === 'buzz') {
      const lastBuzzBy = [...this.state.lastBuzzBy]
      lastBuzzBy.push({
        user: messageData.user,
        time: messageData.time
      });

      if (messageData.type === 'buzz' && this.state.mode === 'familienduell') {
        this.setState({
          buzzUser: 'fd-buzzer',
          lastBuzzBy,
          isOpen: false
        });
      } else {
        this.setState({
          buzzUser: messageData.user,
          lastBuzzBy,
          isOpen: false
        });
      }
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
    this.connection.json({
      type: 'host-sound',
      user: soundName,
      time: new Date().getTime()
    });
  }

  changeMode(modeName) {
    this.connection.json({
      type: 'change-mode',
      modeName
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
        { isUserPlayer && this.state.canNail && <NailImage onNail={() => this.onNail()} />}
        { isUserHost && <LastBuzz isOpen={this.state.isOpen} mode={this.state.mode} lastBuzzBy={this.state.lastBuzzBy} reset={this.reset.bind(this)} /> }
        { isUserHost && <HostButtons  mode={this.state.mode} changeMode={(modeName) => this.changeMode(modeName)} onClick={(soundName) => this.playHostSound(soundName)} />}
        { hasConnection && <BuzzerSound buzzUser={this.state.buzzUser} onFinish={() => this.onSoundPlayFinished()} /> }
      </div>
    );
  }
}

export default Buzzer;