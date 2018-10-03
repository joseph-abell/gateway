import React from 'react';
import Sound from 'react-sound';
import Slider from 'rc-slider/lib/Slider';
import styled from 'styled-components';
import { getFullUrl } from '../helpers';
import Clearfix from '../components/Clearfix';

const AudioPlayer = styled.div`
  background: ${props => props.colour};
  margin: 100px 0;
  padding: 20px 40px;
`;

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  margin-right: 20px;
`;

const SliderContainer = styled.div`
  width: 225px;
  margin-top: 20px;

  @media screen and (min-width: 600px) {
    margin-top: 0;
    float: right;
  }
`;

const StyledSlider = styled(Slider)`
  width: 150px;
  float: right;
  padding: 20px 0;

  .rc-slider-rail {
    background: white;
  }

  .rc-slider-track {
    background: ${props => props.colour};
  }

  .rc-slider-handle {
    border-color: ${props => props.colour};
  }
`;

const Download = styled.a`
  color: ${props => props.colour};
`;

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
    this.setState({ playStatus: 'PAUSED' });
    this.setState({ volume });
    this.setState({ playStatus: 'PLAYING' });
  }

  handlePlaying = ({ position }) => {
    this.setState({ position });
  }

  render = () => {
    return (
      <AudioPlayer colour={this.props.colour} >
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
        <Button onClick={this.pressBack}>
          <img src={getFullUrl('/uploads/rewind.png')} />
        </Button>
        <Button onClick={this.togglePlayPause}>
          {this.state.playStatus === 'PLAYING' && (
            <img src={getFullUrl('/uploads/pause.png')} />
          )}
          {this.state.playStatus === 'PAUSED' && (
            <img src={getFullUrl('/uploads/play.png')} />
          )}
          {this.state.playStatus === 'STOPPED' && (
            <img src={getFullUrl('/uploads/play.png')} />
          )}
        </Button>
        <Button onClick={this.pressFastForward}>
          <img src={getFullUrl('/uploads/fast-forward.png')} />
        </Button>
        <Download href={this.props.url} colour={this.props.lightColour}>
          <img src={getFullUrl('/uploads/download.png')} />
        </Download>
        <SliderContainer>
          <img src={getFullUrl('/uploads/volume.png')} />
          <StyledSlider
            onChange={this.handleVolumeChange}
            defaultValue={100}
            colour={this.props.lightColour}
          />
          <Clearfix />
        </SliderContainer>
        <Clearfix />
      </AudioPlayer>
    );
  }
};

export default Audio;
