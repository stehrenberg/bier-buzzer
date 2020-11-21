import React from 'react'

class HostButtons extends React.Component {
    playSlbMusic() {
        this.props.onClick('slb-music');
    }

    startFd() {
        this.props.changeMode('familienduell');
    }

    stopFd() {
        this.props.changeMode('normal');
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
            <div>
            <div className="host-buttons">
                <h2>Start, Loot, Boss</h2>
                <p className="host-button" onClick={() => this.playSlbMusic()}>SLB Musik</p>
            </div>
            <div className="host-buttons">
                <h2>Familienduell</h2>
                <p className="host-button" onClick={() => this.startFd()}>Starten</p>
                <p className="host-button" onClick={() => this.fdFail()}>Falsche Antwort</p>
                <p className="host-button" onClick={() => this.fdCorrect()}>Richtig</p>
                <p className="host-button" onClick={() => this.fdPersons()}>Sagten auch</p>
                <p className="host-button" onClick={() => this.stopFd()}>Beenden</p>
            </div>
            </div>
        );
    }
}

export default HostButtons;