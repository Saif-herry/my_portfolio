import React from 'react'
import './Timeline.css'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { ThemeContext } from '../../Context/theme'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import StarRateIcon from '@mui/icons-material/StarRate'

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext)
  const [linecolor, setlinecolor] = React.useState(
    themename === 'light' ? '#23283e' : '#fcfcfc'
  )

  React.useEffect(() => {
    if (themename === 'dark') {
      setlinecolor('#fcfcfc')
    } else {
      setlinecolor('#23283e')
    }
  }, [themename])
  return (
    <>
      <div className='section mainsection'>
        <h2 className='section__title' data-aos='fade-right'>
          My <span className='different'>Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={'May 2021 - November 2021'}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: '3px solid var(--clr-primary)',
              backgroundColor: `var(--clr-bg)`,
              textAlign: 'center',
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{
              borderRight: '16px solid  var(--clr-primary)'
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className='vertical-timeline-element-title'
              data-aos='fade-right'
            >
              Student
            </h3>
            <h4
              className='vertical-timeline-element-subtitle'
              data-aos='fade-right'
            >
              Masai School (Remote)
            </h4>
            <p data-aos='fade-right'>
              Joined the Masai school to learn Full Stack Development and DSA.
              Also get to learn lot more other skills as well.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={'July 2017 - june 2020'}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: '3px solid var(--clr-primary)',
              backgroundColor: `var(--clr-bg)`,
              textAlign: 'center',
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{
              borderRight: '16px solid  var(--clr-primary)'
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className='vertical-timeline-element-title'
              data-aos='fade-right'
            >
              Student[Graduation(Bachelor of Computer Applications)]
            </h3>
            <h4
              className='vertical-timeline-element-subtitle'
              data-aos='fade-right'
            >
              Marwari College Ranchi, Jharkhand.
            </h4>
            <p data-aos='fade-right'>
              Studied Bachelor of Computer Applications (BCA) , it imparts
              extensive knowledge in Computer Fundamentals, Programming
              Languages, Database Systems, Information Security and Web
              Development.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date={'June 2014 - March 2016'}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: '3px solid var(--clr-primary)',
              backgroundColor: `var(--clr-bg)`,
              textAlign: 'center',
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{
              borderRight: '16px solid  var(--clr-primary)'
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className='vertical-timeline-element-title'
              data-aos='fade-right'
            >
              Student [HSC (Science)]
            </h3>
            <h4
              className='vertical-timeline-element-subtitle'
              data-aos='fade-right'
            >
              Marwari College Ranchi Jharkhand
            </h4>
            <p data-aos='fade-right'>
              Studied 12th Science and Passed with 60%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date={'June 2011 - Jul 2013'}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: '3px solid var(--clr-primary)',
              backgroundColor: `var(--clr-bg)`,
              textAlign: 'center',
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{
              borderRight: '16px solid  var(--clr-primary)'
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className='vertical-timeline-element-title'
              data-aos='fade-right'
            >
              Student [Board(10th)]
            </h3>
            <h4
              className='vertical-timeline-element-subtitle'
              data-aos='fade-right'
            >
              High School Boreya Kanke, Ranchi, Jharkhand
            </h4>
            <p data-aos='fade-right'>Studied 10th and Passed with 77%.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  )
}
