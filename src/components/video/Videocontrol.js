import React, { forwardRef } from 'react'
import { Grid, Typography, Slider, IconButton } from '@material-ui/core'
//Icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import Replay10Icon from '@material-ui/icons/Replay10'
import Forward10Icon from '@material-ui/icons/Forward10'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import CommentIcon from '@material-ui/icons/Comment'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import PauseIcon from '@material-ui/icons/Pause'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'
//Styles
import { makeStyles, withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  controlsWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomControls: {
    background: 'linear-gradient(180deg, rgba(0,0,0,0) , rgba(0,0,0,0.9) )',
  },
  bottomIcons: {
    color: '#fff',
  },
  volumeSlider: {
    width: 100,
    color: '#fff',
  },
  controlIcons: {
    color: '#777',
    fontSize: 50,
    transform: 'scale(0.9)',
    '&:hover': {
      color: '#fff',
      transform: 'scale(1)',
    },
  },
})

const PrettoSlider = withStyles({
  root: {
    color: 'primary',
    padding: 0,
  },
  thumb: {
    height: 14,
    width: 14,

    marginTop: -5,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 4,
  },
  rail: {
    height: 4,
  },
})(Slider)

const Controls = forwardRef(
  (
    {
      onPlayPause,
      playing,
      onRewind,
      onForward,
      muted,
      onMute,
      onVolumeChange,
      onVolumeSeekUp,
      volume,
      onFullScreen,
      played,
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      remainingTime,
      title,
    },
    ref
  ) => {
    const classes = useStyles()

    return (
      <div ref={ref} className={classes.controlsWrapper}>
        <Grid></Grid>
        <Grid container direction='row' alignItems='center' justify='center'>
          <IconButton
            className={classes.controlIcons}
            aria-label='regind'
            onClick={onPlayPause}
          >
            {playing ? (
              <PauseIcon fontSize='inherit' />
            ) : (
              <PlayArrowIcon fontSize='inherit' />
            )}
          </IconButton>
        </Grid>
        <div className={classes.bottomControls}>
          <Grid
            container
            direction='row'
            alignItems='center'
            justify='space-between'
            style={{
              paddingLeft: 12,
            }}
          >
            <Grid container xs={12}>
              <Grid item xs={11}>
                <PrettoSlider
                  min={0}
                  max={100}
                  value={played * 100}
                  onChange={onSeek}
                  onMouseDown={onSeekMouseDown}
                  onChangeCommitted={onSeekMouseUp}
                />
              </Grid>
              <Grid item xs={1}>
                <Typography
                  variant='h6'
                  style={{
                    color: '#fff',
                    marginLeft: 30,
                  }}
                >
                  {remainingTime}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems='center' direction='row'>
                <IconButton
                  onClick={onPlayPause}
                  className={classes.bottomIcons}
                >
                  {playing ? (
                    <PauseIcon fontSize='medium' />
                  ) : (
                    <PlayArrowIcon fontSize='medium' />
                  )}
                </IconButton>
                <IconButton className={classes.bottomIcons} onClick={onRewind}>
                  <Replay10Icon fontSize='large' />
                </IconButton>
                <IconButton className={classes.bottomIcons} onClick={onForward}>
                  <Forward10Icon fontSize='large' />
                </IconButton>
                <IconButton onClick={onMute} className={classes.bottomIcons}>
                  {muted ? (
                    <VolumeOffIcon fontSize='medium' />
                  ) : (
                    <VolumeUpIcon fontSize='medium' />
                  )}
                </IconButton>
                <Slider
                  min={0}
                  max={100}
                  value={volume * 100}
                  className={classes.volumeSlider}
                  onChange={onVolumeChange}
                  onChangeCommitted={onVolumeSeekUp}
                />
                <Typography
                  variant='h6'
                  style={{ color: '#fff', paddingLeft: 24 }}
                >
                  • {title}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems='center' direction='row'>
                <IconButton className={classes.bottomIcons}>
                  <HelpOutlineIcon fontSize='medium' />
                </IconButton>
                <IconButton className={classes.bottomIcons}>
                  <SkipNextIcon fontSize='medium' />
                </IconButton>
                <IconButton className={classes.bottomIcons}>
                  <CommentIcon fontSize='medium' />
                </IconButton>
                <IconButton
                  onClick={onFullScreen}
                  className={classes.bottomIcons}
                >
                  <FullscreenIcon fontSize='medium' />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
)
export default Controls