import React from 'react'

class HostButtons extends React.Component {
    playSlbMusic() {
        this.props.onClick('slb-music');
    }

    startFd() {
        this.props.changeMode('familienduell', false);
    }

    stopFd() {
        this.props.changeMode('normal', true);
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

    startNewRound() {
        this.props.startNewRound();
    }

    render() {
        return (
            <div>
            <div className="host-buttons">
                <h2>General</h2>
                <p className="host-button" onClick={() => this.startNewRound()}>Nächste Runde starten</p>
            </div>    
            <div className="host-buttons">
                <h2>Start, Loot, Boss</h2>
                <p className="host-button" onClick={() => this.playSlbMusic()}>SLB Musik</p>
            </div>
            <div className="host-buttons">
                <h2>Familienduell</h2>
                <p className={`host-button ${this.props.mode === 'familienduell' ? 'inactive' : ''}`} onClick={() => this.startFd()}>Starten</p>
                <p className="host-button" onClick={() => this.fdFail()}>Falsche Antwort</p>
                <p className="host-button" onClick={() => this.fdCorrect()}>Richtig</p>
                <p className="host-button" onClick={() => this.fdPersons()}>Sagten auch</p>
                <p className={`host-button ${this.props.mode === 'normal' ? 'inactive' : ''}`} onClick={() => this.startNewRound()}>Beenden</p>
            </div>
            </div>
        );
    }
}

export default HostButtons;