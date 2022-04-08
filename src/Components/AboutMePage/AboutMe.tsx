import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typewriter from 'typewriter-effect'

import './AboutMe.css'

const AboutContainer = styled(Box)({
  height: '100 %',
  width: '100%',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const TextBox = styled(Box)({
  height: '700px',
  width: '100%',
  maxWidth: '700px',
  minWidth: '350px',
  textAlign: 'left',
  padding: '1rem',
})

const AboutMe = () => {
  return (
    <AboutContainer className="typewriter-container">
      <Box sx={{ height: '20%' }}>
        <Typography variant="h1">About Me.</Typography>
      </Box>
      <TextBox>
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('Hello, My name is Kevin! Thanks for visiting, here is a little bit about me...')
              .callFunction(() => {
                console.log('String typed out!'); // tslint:disable-line
              })
              .pauseFor(2500)
              .start()
          }}
        />
      </TextBox>
    </AboutContainer>
  )
}

export default AboutMe
