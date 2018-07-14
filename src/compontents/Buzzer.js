/**
 * Created by Steff on 14/07/18.
 */
import React from 'react';
import BuzzerOff from '../assets/img/button-off.gif';
import BuzzerOn from '../assets/img/button-on.gif';

class Buzzer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            buzzer: BuzzerOff
        }
    }

    onMouseOver() {
        this.setState({
            buzzer: BuzzerOn
        });
    }

    onMouseOut() {
        this.setState({
            buzzer: BuzzerOff
        });
    }

    render() {
        return (
            <img
                src={this.state.buzzer}
                className="Buzzer"
                alt="Buzz!"
                onMouseOver={() => this.onMouseOver()}
                onMouseOut={() => this.onMouseOut()}
            />
        );
    }
}

export default Buzzer;