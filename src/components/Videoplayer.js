import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Controls from './Videocontrol';
import { makeStyles } from '@material-ui/core/styles';
import screenful from 'screenfull';
const useStyles = makeStyles({
  playerWrapper: {
    height: '90vh',
    position: 'relative',
  },
});

const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, '0');
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
  }
  return `${mm}:${ss}`;
};

let count = 0;
const videoId = window.location.pathname.split('/').pop();

function VideoPlayer(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    played: 0,
    seeking: false,
  });

  const { playing, muted, volume, played } = state;

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsRef = useRef(null);

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  };

  const handleForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  };

  const handleMute = () => {
    setState({ ...state, muted: !state.muted });
  };

  const handleVolumeSeekUp = (e, newValue) => {
    setState({ ...state, seeking: false, volume: parseFloat(newValue / 100) });
  };

  const handleVolumeChange = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handleFullScreen = () => {
    screenful.toggle(playerContainerRef.current);
  };

  const handleProgress = (changeState) => {
    if (count > 3) {
      controlsRef.current.style.visibility = 'hidden';
      count = 0;
    }
    if (controlsRef.current.style.visibility === 'visible') {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeek = (e, newValue) => {
    setState({ ...state, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };

  const handleSeekMouseUp = (e, newValue) => {
    setState({ ...state, seeking: false });
    playerRef.current.seekTo(newValue / 100, 'fraction');
  };

  const currentTime =
    playerRef && playerRef.current
      ? playerRef.current.getCurrentTime()
      : '00:00';

  const duration =
    playerRef && playerRef.current ? playerRef.current.getDuration() : '00:00';

  const remainingTime = format(duration - currentTime);

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = 'visible';
    count = 0;
  };
  return (
    <>
      <div
        ref={playerContainerRef}
        className={classes.playerWrapper}
        onMouseMove={handleMouseMove}
      >
        <ReactPlayer
          ref={playerRef}
          muted={muted}
          playing={playing}
          height="100%"
          width="100%"
          url={props.url}
          volume={volume}
          onProgress={handleProgress}
        />
        <Controls
          ref={controlsRef}
          onPlayPause={handlePlayPause}
          playing={playing}
          onRewind={handleRewind}
          onForward={handleForward}
          muted={muted}
          onMute={handleMute}
          onVolumeChange={handleVolumeChange}
          onVolumeSeekUp={handleVolumeSeekUp}
          volume={volume}
          onFullScreen={handleFullScreen}
          played={played}
          onSeek={handleSeek}
          onSeekMouseDown={handleSeekMouseDown}
          onSeekMouseUp={handleSeekMouseUp}
          remainingTime={remainingTime}
          //   title={title}
        />
      </div>
    </>
  );
}

export default VideoPlayer;
