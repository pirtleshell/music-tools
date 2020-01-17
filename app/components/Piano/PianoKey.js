// @flow
import React from 'react';
import styles from './Piano.css';

type Props = {
  audioCtx: { createOscillator: () => void },
  black: boolean,
  masterGainNode: {},
  noteName: string,
  freq: number
};

class PianoKey extends React.Component {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      tone: false
    };
    this.playTone = this.playTone.bind(this);
    this.notePressed = this.notePressed.bind(this);
    this.noteReleased = this.noteReleased.bind(this);
  }

  playTone() {
    const { audioCtx, masterGainNode, freq } = this.props;
    const osc = audioCtx.createOscillator();
    osc.connect(masterGainNode);

    // osc.type = 'sawtooth';
    osc.type = 'sine';
    osc.frequency.value = freq;
    osc.start();

    return osc;
  }

  notePressed() {
    this.setState({ tone: this.playTone() });
  }

  noteReleased() {
    const { tone } = this.state;
    if (tone) {
      tone.stop();
      this.setState({ tone: false });
    }
  }

  render() {
    const { black, noteName } = this.props;
    let theclass = [styles.pianoKey];
    if (black === 1) theclass.push(`${styles.black}`);
    theclass = theclass.join(' ');
    return (
      <div
        className={theclass}
        key={`${noteName}-subdiv`}
        onMouseDown={this.notePressed}
        onTouchStart={this.notePressed}
        onMouseUp={this.noteReleased}
        onMouseOut={this.noteReleased}
        onTouchEnd={this.noteReleased}
        onTouchMove={this.noteReleased}
        onBlur={this.noteReleased}
        role="button"
        tabIndex={0}
      >
        <p className={styles.pianoNoteName}>{noteName}</p>
      </div>
    );
  }
}

export default PianoKey;
