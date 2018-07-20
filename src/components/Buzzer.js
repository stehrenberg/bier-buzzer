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
      playSound: false
    };
  }

  onBuzz(user) {
    this.connection.json({
      type: 'buzz',
      user: 'horst'
    });
  }

  onMessage(message) {
    console.log(message.data);

    this.setState({
      playSound: true
    });
  }

  onSoundPlayFinished() {
    this.setState({
      playSound: false
    });
  }


  render() {
    return (
      <div>
        <BuzzerImage onBuzz={() => this.onBuzz()} />
        <BuzzerSound playSound={this.state.playSound} onFinish={() => this.onSoundPlayFinished()} />
      </div>
    );
  }
}

export default Buzzer;