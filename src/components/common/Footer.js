import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import ListItemText from '@material-ui/core/ListItemText'
import List from '@material-ui/core/List'

//Icons
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import YouTubeIcon from '@material-ui/icons/YouTube'
import TwitterIcon from '@material-ui/icons/Twitter'

const Footer = () => {
  return (
    <div className='footer-root p-3' style={{backgroundColor: 'GrayText'}}>
      <footer className='footer-footer'>
        <Container maxWidth='md'>
          <Grid container justify='center' spacing={1}>
            <Grid item md={4} sm={4} xs={12}>
              <Typography className='footer-title'>Important Links</Typography>
              <List>
                <ListItemText
                  className='footer-textStyle'
                  primary={
                    <Link href='/ebooks' variant='body2' color='inherit'>
                      {'Ebooks'}
                    </Link>
                  }
                />

                <ListItemText
                  className='footer-textStyle'
                  primary={
                    <Link href='/blogs' variant='body2' color='inherit'>
                      {'Blogs '}
                    </Link>
                  }
                />
                <ListItemText
                  className='footer-textStyle'
                  primary={
                    <Link
                      href='https://www.facebook.com/'
                      variant='body2'
                      color='inherit'
                    >
                      {'Facebook group '}
                    </Link>
                  }
                />
                <ListItemText
                  className='footer-textStyle'
                  primary={
                    <Link href='/about-us' variant='body2' color='inherit'>
                      {'About Us '}
                    </Link>
                  }
                />
                <ListItemText
                  className='footer-textStyle'
                  primary={
                    <Link href='/contact' variant='body2' color='inherit'>
                      {'Contact Us '}
                    </Link>
                  }
                />
              </List>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Typography className='footer-title'>Contact Us</Typography>
              <List>
                <ListItemText
                  className='footer-textStyle'
                  primary={
                    <Link
                      href='/join-as-mentor'
                      variant='body2'
                      color='inherit'
                    >
                      {'Join as a Mentor'}
                    </Link>
                  }
                />

                <ListItemText
                  className='footer-textStyle'
                  primary={
                    <Link
                      href='mailto: hello@gameroom-esd.com'
                      variant='body2'
                      color='inherit'
                    >
                      {'Email: hello@gameroom-esd.com'}
                    </Link>
                  }
                />
                <div style={{ display: 'inline-flex', marginRight: '10px' }}>
                  <ListItemText
                    primary={
                      <Link
                        href='https://facebook.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ marginRight: '20px', color: 'white' }}
                      >
                        <FacebookIcon aria-label='Facebook' />
                      </Link>
                    }
                  />
                  <ListItemText
                    primary={
                      <Link
                        href='https://www.linkedin.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ marginRight: '20px', color: 'white' }}
                      >
                        <LinkedInIcon aria-label='Linkedin' />
                      </Link>
                    }
                  />
                  <ListItemText
                    primary={
                      <Link
                        href='https://instagram.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ marginRight: '20px', color: 'white' }}
                      >
                        <InstagramIcon aria-label='Instagram' />
                      </Link>
                    }
                  />
                  <ListItemText
                    primary={
                      <Link
                        href='https://www.youtube.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ marginRight: '20px', color: 'white' }}
                      >
                        <YouTubeIcon aria-label='YouTube' />
                      </Link>
                    }
                  />
                  <ListItemText
                    primary={
                      <Link
                        href='https://twitter.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ marginRight: '20px', color: 'white' }}
                      >
                        <TwitterIcon aria-label='Twitter' />
                      </Link>
                    }
                  />
                </div>
              </List>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Typography className='footer-title'>
                Learn from the Best
              </Typography>
              <List>
                <ListItemText
                  className='footer-textStyle'
                  primary={
                    <Link
                      href='/terms-and-conditions'
                      variant='body2'
                      color='inherit'
                    >
                      {'Terms & Conditions'}
                    </Link>
                  }
                />

                <ListItemText
                  className='footer-textStyle'
                  primary={
                    <Link
                      href='/privacy-policy'
                      variant='body2'
                      color='inherit'
                    >
                      {'Privacy Policy'}
                    </Link>
                  }
                />

                <ListItemText
                  className='footer-textStyle'
                  primary={
                    <Link href='/sitemap.xml' variant='body2' color='inherit'>
                      {'Sitemap'}
                    </Link>
                  }
                />
              </List>
            </Grid>
          </Grid>

          <Typography variant='body2' align='center' color=''>
            © All content is protected under the Bangladesh Copyright Act, 2000
            It is illegal to publish any content contained on this site
            elsewhere without permission.
          </Typography>
          <Typography
            className='footer-textStyle'
            variant='body2'
            align='center'
          >
            Copyright ©{' '}
            <Link href='https://esd.com' variant='body2' color='inherit'>
              {'ESD'}
            </Link>
          </Typography>
        </Container>
      </footer>
    </div>
  )
}

export default Footer