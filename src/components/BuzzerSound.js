/**
 * Created by djungowski on 14.07.18.
 */
import React from 'react';
import BuzzerSoundFile from './BuzzerSoundFile.js';
import SoundAndre from '../assets/sound/andre.mp3';
import SoundJochen from '../assets/sound/jochen.mp3';
import SoundSebastian from '../assets/sound/sebastian.mp3';

import users from '../config/users.js';

class BuzzerSound extends React.Component {
  constructor(props) {
    super(props);

    const soundAndre = new Audio(SoundAndre);
    const soundJochen = new Audio(SoundJochen);
    const soundSebastian = new Audio(SoundSebastian);
    soundAndre.onended = () => this.props.onFinish();
    soundJochen.onended = () => this.props.onFinish();
    soundSebastian.onended = () => this.props.onFinish();

    this.state = {
      andre: soundAndre,
      jochen: soundJochen,
      sebastian: soundSebastian
    };
  }

  render() {
    return (
      <div>
        { users.map(user => (
          <BuzzerSoundFile user={user} play={this.props.buzzUser} onFinish={() => this.props.onFinish()} key={ user.name } />
        ))}
      </div>
    );
  }
}

export default BuzzerSound;