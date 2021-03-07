import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Box, Typography } from '@material-ui/core'

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 10,
    width: 400,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress)

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

const ProgressBar = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box display='flex' alignItems='center'>
        <BorderLinearProgress variant='determinate' value={props.progress} />
        {/* <Box >
          <Typography variant='body2'>{`${Math.round(
            props.progress
          )}%`}</Typography>
        </Box> */}
      </Box>
    </div>
  )
}

export default ProgressBar
