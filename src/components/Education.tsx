import styled from 'styled-components'
import { EducationCard } from './EducationCard'

interface IProps {
  className?: string
}

function EducationEl(props: IProps) {
  const { className } = props
  const education = {
    master: {
      degree: 'Master of Science in Technology',
      image: '/logo-72899-1.png',
      text:
        'I am studying Computer, Communication and Information Sciences in the field of Signal, Speech and Language Processing.',
      date: 'October 2017 - Present',
    },
    bachelor: {
      degree: 'Bachelor of Science (Technology)',
      image: '/logo-35434-1.png',
      text:
        'I finished my bachelor’s degree in Automation and System technology in 2017. I wrote my thesis about Symbol Grounding in Robotics.',
      date: 'October 2014 - 2017',
    },
    graduate: {
      degree: 'Graduate student',
      image: '/hyvinkaa-logo.jpg',
      text:
        'I wrote extended mathematics, physics, english, social studies and finnish.',
      date: 'August 2010 - June 2013',
    },
  }
  return (
    <Container className="w-full h-auto items-center bg-gradient-to-b from-black">
      <div>
        <div className="w-72 h-8 mx-auto bg-purple-900 relative top-16 z-0"></div>
        <h2 className="text-center mb-4 text-6xl relative z-1">Education</h2>
      </div>
      <CardWrapper className="w-1/2  m-auto mt-8 flex flex-col md:flex-row justify-evenly items-center flex-wrap">
        <EducationCard education={education.master} />
        <EducationCard education={education.bachelor} />
        <EducationCard education={education.graduate} />
      </CardWrapper>
    </Container>
  )
}
const Container = styled.div`
  & > h2 {
    font-size: 3.75rem;
    font-weight: 500;
    margin: 0 0 20px 0;
    letter-spacing: 2px;
    // text-transform: uppercase;
  }
  min-height: 100vh;
  background-color: rgba(8,3,15, 1)
`
const CardWrapper = styled.div`
  // align-items: center;
  // align-content: space-around;
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  // justify-content: space-between;
`
export const Education = EducationEl
