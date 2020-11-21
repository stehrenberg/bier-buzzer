import React from 'react';

class BuzzerSoundFile extends React.Component {
  constructor(props) {
    super(props);

    const soundFile = new Audio();
    soundFile.onEnded = () => this.props.onFinish();
    this.state = {}

    const soundLoaded = () => {
      this.setState({soundFile});
    };

    soundFile.addEventListener('canplaythrough', soundLoaded.bind(this))
    soundFile.src = this.props.user.soundFile
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