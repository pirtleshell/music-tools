// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Piano.css';

import PianoKey from './PianoKey';
import noteFreq from '../../constants/noteFrequencies';
import routes from '../../constants/routes.json';

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const isBlack = [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0];

class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const masterGainNode = audioContext.createGain();
    masterGainNode.connect(audioContext.destination);

    this.setState({
      ctx: audioContext,
      masterGainNode
    });
  }

  render() {
    const items = [];
    const octaves = [3, 4, 5];
    const { ctx, masterGainNode } = this.state;

    octaves.forEach(octave => {
      notes.forEach((note, n) => {
        const noteName = notes[n] + octave.toString();
        items.push(
          <PianoKey
            black={isBlack[n]}
            key={`pianokey-${noteName}`}
            audioCtx={ctx}
            masterGainNode={masterGainNode}
            freq={noteFreq[octave][note]}
            noteName={noteName}
          />
        );
      });
    });

    return (
      <div className="container">
        <div className="backButton" data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <h2>Piano</h2>
        <p>This is a supposed piano, I think.</p>
        <div className={styles.piano}>{items}</div>
      </div>
    );
  }
}

export default Piano;
