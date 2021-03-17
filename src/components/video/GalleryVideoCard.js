import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { orange } from '@material-ui/core/colors';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import ModeCommentTwoToneIcon from '@material-ui/icons/ModeCommentTwoTone';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function GalleryVideo({ id, video }) {
  const classes = useStyles();

  return (
    <Container className="mb-3">
      <Link to={'/video/' + id}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={video.thumbnail}
            title={video.category}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {video.title}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {video.userName}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {video.description}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton>
                {video.likes + ' '}
                <FavoriteTwoToneIcon color="primary" />
              </IconButton>
              {/*<IconButton>
                <ModeCommentTwoToneIcon color="primary" />
              </IconButton>*/}
            </div>
          </div>
        </Card>
      </Link>
    </Container>
  );
}
