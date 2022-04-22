import React from 'react'
import './Mobile.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
  return (
    <>
        <div className="contact-container" id='contact'>
           <h2 className='h1-cm'>Contact Us</h2>
           <br />
           <img src="assets/contact.jpg" alt="" />
           <h1>Send us a Message</h1>
           <div className="contact-form">
                <h1 className='mb'>Send us a Message</h1>
                <TextField className='textfild' id="standard-basic" label="Fullname" variant="standard" />
                <TextField className='textfild' id="standard-basic" label="Email" variant="standard" />
                <TextField className='textfild' id="standard-basic" label="Your message here" variant="standard" />
                <Button className='send-button' variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
          </div>

          <div className="social-link">
               <a href="https://www.instagram.com/kanhaiya_lal_verma_44444/"> <InstagramIcon className='icon' /> </a>
               <a href="https://www.linkedin.com/in/kanhaiya-lal-2148431bb/"> <LinkedInIcon className='icon'/> </a>
               <a href="https://twitter.com/Kanhaiy32483632"> <TwitterIcon className='icon' /></a>
               <a href="https://mail.google.com/mail/u/0/"> <MailIcon className='icon' /> </a>
            </div>
        </div>
    </>
  )
}

export default Contact