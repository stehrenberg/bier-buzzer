import React from 'react'

class HostButtons extends React.Component {
    playSlbMusic() {
        this.props.onClick('slb-music');
    }

    fdFail() {
        this.props.onClick('fd-fail');
    }

    fdCorrect() {
        this.props.onClick('fd-correct');
    }

    fdPersons() {
        this.props.onClick('fd-persons');
    }

    render() {
        return (
            <div className="host-buttons">
                <p className="host-button" onClick={() => this.playSlbMusic()}>SLB Musik</p>
                <p className="host-button" onClick={() => this.fdFail()}>FD: Falsche Antwort</p>
                <p className="host-button" onClick={() => this.fdCorrect()}>FD: Richtig</p>
                <p className="host-button" onClick={() => this.fdPersons()}>FD: Sagten auch</p>
            </div>
        );
    }
}

export default HostButtons;