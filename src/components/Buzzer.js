import React from 'react';
import BuzzerImage from './BuzzerImage.js';
import BuzzerSound from './BuzzerSound.js';

class Buzzer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playSound: false
    }
  }

  onBuzz() {
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