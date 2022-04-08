
import React, {useRef} from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { TextField } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

import * as emailjs from 'emailjs-com'
import './Contact.css'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Container = styled(Box)({
  height: '90%',
  width: '100%',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
})

const TitleTypo = styled(Typography)({
  textDecoration: 'underline',
  textTransform: 'uppercase',
})

const FormBox = styled(Box)({
  height: '70%', 
  width: '100%',
  textAlign: 'center', 
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column'
})

const Contact = () => {
  const form = useRef<any | null>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form.current)
    const serviceId: string = process.env.REACT_APP_EMAILJS_SERVICE_ID || ''
    const templateId: string = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || ''
    const userId: string = process.env.REACT_APP_EMAILJS_USER_ID || ''

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then((result) => {
        console.log(result.text);
        form.current.reset()
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <Container className='form-container'>
      <Box sx={{ height: 'auto', textAlign: 'center', alignItems: 'center' }}>
        <TitleTypo variant="h3">Shoot me an email.</TitleTypo>
      </Box>
      <FormBox>
        <form className='form-layout' ref={form} onSubmit={sendEmail}>
          <FormControl variant="standard">
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input
              id="name-input"
              fullWidth
              required
              type='text'
              name="from_name"
              aria-describedby="name-input-text"
            />
            <FormHelperText id="name-input-text">
              So I know who you are!
            </FormHelperText>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="email-input">Email</InputLabel>
            <Input id="email-input" type='email' name='reply_to' fullWidth/>
            <FormHelperText>Makes it easier to respond back...</FormHelperText>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="message" placeholder='Message'/>
            <TextField
              id="message"
              name='message'
              placeholder='Message...'
              type='text'
              fullWidth
              multiline
              rows={6}
              aria-describedby="message to Kevin Hartmann"
            />
            <FormHelperText id="message-helper-text">What do you want to say?</FormHelperText>
          </FormControl>
          <Button type='submit' value='Send' variant="contained" color="primary">
            Send
          </Button>
        </form>
      </FormBox>
    </Container>
  )
}

export default Contact
