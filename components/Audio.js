import React from 'react';
import Sound from 'react-sound';
import Slider from 'rc-slider/lib/Slider';

class Audio extends React.Component {
  state = {
    playStatus: 'STOPPED',
    position: 0,
    duration: 0,
    volume: 100
  }

  togglePlayPause = () => {
    if (this.state.playStatus === 'PLAYING') {
      this.pressPause();
    } else {
      this.pressPlay();
    }
  }

  pressPlay = () => {
    this.setState({ playStatus: 'PLAYING' });
  }

  pressPause = () => {
    this.setState({ playStatus: 'PAUSED' });
  }

  pressFastForward = () => {
    if (this.state.position + 10000 > this.state.duration) {
      this.setState({ position: this.state.duration });
    } else {
      this.setState({ position: this.state.position + 10000 });
    }
  }

  pressBack = () => {
    if (this.state.position - 10000 < 0) {
      this.setState({ position: 0 });
    } else {
      this.setState({ position: this.state.position - 10000 });
    }
  }

  setPositionAndDuration = ({ position, duration }) => {
    this.setState({ position, duration });
  }

  setDuration = ({ duration }) => {
    this.setState({ duration });
  }

  handleVolumeChange = (volume) => {
    this.setState({ playState: 'PAUSED' });
    this.setState({ volume });
    this.setState({ playState: 'PLAYING' });
  }

  handlePlaying = ({ position }) => {
    this.setState({ position });
  }

  render = () => {
    return (
      <React.Fragment>
        <Sound
          url={this.props.url}
          volume={this.state.volume}
          autoLoad={true}
          playStatus={this.state.playStatus}
          position={this.state.position}
          onPause={this.setPositionAndDuration}
          onStop={this.setPositionAndDuration}
          onLoading={this.setDuration}
          onPlaying={this.handlePlaying}
        />
        <div onClick={this.pressBack}>Back</div>
        <div onClick={this.togglePlayPause}>Play / Pause</div>
        <div onClick={this.pressFastForward}>Fast Forward</div>
        <a href={this.props.url}>Download</a>
        <Slider onChange={this.handleVolumeChange} defaultValue={100} />
      </React.Fragment>
    );
  }
};

export default Audio;
