import React from 'react'
import './Introduction.css'
import { ThemeContext } from '../../Context/theme'
import profilePic from '../../assets/Profile-pic.png'

import ExitToAppIcon from '@mui/icons-material/ExitToApp'

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext)

  return (
    <>
      <section id='#about'>
        <div className='section' data-aos='fade-right'>
          <h2 className='section__title'>
            About <span className='different'>Me</span>
          </h2>
          <div className={'introduction ' + themename}>
            <div className='introduction_logocontainer'>
              <img src={profilePic} alt='Images' />
            </div>
            <div className='introduction_datacontainer'>
              <h4>
                Hi Everyone, My name is{' '}
                <span className='different'>Mohammad Saif </span> and I am from{' '}
                <span className='different'> Ranchi, Jharkhand (India)</span>. I
                have completed my Bachelors's in Computer Application from{' '}
                <span className='different'>
                  Indira Gandhi National Open University, Ranchi Jharkhand
                </span>
                . Then I joined full stack development course by{' '}
                <span className='different'>Masai School</span> a military type
                coding school.
              </h4>
              <h4>Terms That can describe me apart from Coding :</h4>
              <h4 className='different'>
                <span className='icons'>
                  <ExitToAppIcon />
                </span>
                Quick Learner{' '}
              </h4>
              <h4 className='different'>
                <span className='icons'>
                  <ExitToAppIcon />
                </span>
                Professional Coder{' '}
              </h4>
              <h4 className='different'>
                <span className='icons'>
                  <ExitToAppIcon />
                </span>
                Team Player{' '}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
