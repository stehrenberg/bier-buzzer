/**
 * Created by djungowski on 14.07.18.
 */
import React from 'react';
import BuzzerSoundFile from './BuzzerSoundFile.js';
import users from '../config/users.js';
import sounds from '../config/sounds.js';

class BuzzerSound extends React.Component {
  render() {
    return (
      <div>
        { users.map(user => (
          <BuzzerSoundFile user={user} play={this.props.buzzUser} onFinish={() => this.props.onFinish()} key={ user.name } />
        ))}
        { sounds.map(user => (
          <BuzzerSoundFile user={user} play={this.props.buzzUser} onFinish={() => this.props.onFinish()} key={ user.name } />
        ))}
      </div>
    );
  }
}

export default BuzzerSound;