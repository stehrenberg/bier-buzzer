/**
 * Created by Steff on 14/07/18.
 */
import React from 'react';
import HammerAndNailImage from '../assets/img/hammer-and-nail.png';

class NailImage extends React.Component {
  render() {
    return (
      <div>
        <img
            src={HammerAndNailImage}
            className="nail-image"
            alt="Nageln!"
            onClick={() => this.props.onNail()}
        />
      </div>
    );
  }
}

export default NailImage;