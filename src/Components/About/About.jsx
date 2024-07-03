import React from 'react'
import './About.css'
import { Type } from './Type'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import { Introduction } from './Introduction'
import { Timeline } from './Timeline'
import { Techstacks } from './Techstacks'

import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import TwitterIcon from '@mui/icons-material/Twitter'
import DescriptionIcon from '@mui/icons-material/Description'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import StarRateIcon from '@mui/icons-material/StarRate'

export const About = () => {
  return (
    <>
      <div className='about center'>
        <h1 data-aos='fade-right' className='mobileHead'>
          Hello, I am <span className='about__name'>Mohammad Saif</span>
        </h1>
        <Type />
        <p className='about__desc' data-aos='fade-right'>
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one. Worked on 10+ projects till now.
        </p>
        <div className='about__contact center'>
          <a
            href='https://github.com/Saif-herry?tab=repositories'
            aria-label='github'
            target='_blank'
            rel='noreferrer'
            className='link link--icon'
          >
            <GitHubIcon />
          </a>
          <a
            href='mailto: saifsami321md@gmail.com'
            target='_blank'
            rel='noreferrer'
            aria-label='mail'
            className='link link--icon'
          >
            <EmailIcon />
          </a>
          <a
            href='tel:+918434917976'
            target='_blank'
            rel='noreferrer'
            aria-label='phone'
            className='link link--icon'
          >
            <PhoneIcon />
          </a>
          <a
            href='https://www.linkedin.com/in/mohammad-saif123/'
            aria-label='linkedin'
            className='link link--icon'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
        </div>

        <button
          className='btnResume'
          onClick={() => {
            window.open(
              'https://drive.google.com/file/d/1J-tRYPz92KFMszyK-c2fWIDuGwI91ddy/view'
            )
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id='#skills'>
        <Techstacks />
      </section>
    </>
  )
}
