/**
 * Created by djungowski on 14.07.18.
 */
import React from 'react';
import SoundAndre from '../assets/sound/andre.mp3';
import SoundJochen from '../assets/sound/jochen.mp3';
import SoundSebastian from '../assets/sound/sebastian.mp3';

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

  componentDidUpdate() {
    if (this.props.playSound) {
      this.state.andre.play();
      this.state.jochen.play();
      this.state.sebastian.play();
    }
  }

  render() {
    return '';
  }
}

//export {Andre, Jochen, Sebastian};
export default BuzzerSound;