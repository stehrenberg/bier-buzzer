import React from 'react';
import BuzzerImage from './BuzzerImage.js';
import BuzzerSound from './BuzzerSound.js';
import Sockette from 'sockette';

class Buzzer extends React.Component {
  constructor(props) {
    super(props);

    this.connection = new Sockette('ws://localhost:8080', {
      onmessage: this.onMessage.bind(this)
    });

    this.state = {
      buzzUser: null
    };
  }

  onBuzz(user) {
    this.connection.json({
      type: 'buzz',
      user: 'Sebastian'
    });
  }

  onMessage(message) {
    const messageData = JSON.parse(message.data);
    this.setState({
      buzzUser: messageData.user
    });
  }

  onSoundPlayFinished() {
    this.setState({
      buzzUser: null
    });
  }


  render() {
    return (
      <div>
        <BuzzerImage onBuzz={() => this.onBuzz()} />
        <BuzzerSound buzzUser={this.state.buzzUser} onFinish={() => this.onSoundPlayFinished()} />
      </div>
    );
  }
}

export default Buzzer;