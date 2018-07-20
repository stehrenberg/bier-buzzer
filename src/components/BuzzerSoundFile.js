import React from 'react';

class BuzzerSoundFile extends React.Component {
  constructor(props) {
    super(props);

    const soundFile = new Audio(this.props.user.soundFile);
    soundFile.onEnded = () => this.props.onFinish();

    this.state = {soundFile};
  }

  componentDidUpdate() {
    if (this.props.play === this.props.user.name) {
      this.state.soundFile.play();
    }
  }

  render() {
    return '';
  }
}

export default BuzzerSoundFile;