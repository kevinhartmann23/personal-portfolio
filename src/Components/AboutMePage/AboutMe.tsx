import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typewriter from 'typewriter-effect'

import './AboutMe.css'

const AboutContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
})

const TextBox = styled(Box)({
  height: '70%',
  width: '100%',
  maxWidth: '700px',
  minWidth: '350px',
  textAlign: 'left',
  padding: '1rem',
})

const TitleTypo = styled(Typography)({
  textDecoration: 'underline',
  textTransform: 'uppercase',
})

const AboutMe = () => {
  return (
    <AboutContainer className="typewriter-container">
      <Box sx={{ height: 'auto', textAlign: 'center', alignItems: 'center' }}>
        <TitleTypo variant="h3">About Me.</TitleTypo>
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
