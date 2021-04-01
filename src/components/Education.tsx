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
      image: '/aalto.png',
      text:
        'I am studying Computer, Communication and Information Sciences in the field of Signal, Speech and Language Processing.',
      date: 'October 2017 - Present',
    },
    bachelor: {
      degree: 'Bachelor of Science in Technology',
      image: '/aalto.png',
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
      <div className="mb-8">
        <div className="w-80 h-8 mx-auto bg-green-900 relative top-20 z-0"></div>
        <h2 className="text-center text-6xl relative z-1">Education</h2>
      </div>
      <CardWrapper className="w-3/5 m-auto flex flex-col space-y-10 justify-evenly items-center flex-wrap">
        <EducationCard education={education.master} />
        <EducationCard education={education.bachelor} />
        <EducationCard education={education.graduate} />
      </CardWrapper>
    </Container>
  )
}
const Container = styled.div`
  & > h2 {
    letter-spacing: 2px;
    // text-transform: uppercase;
  }
  min-height: 100vh;
  background-color: rgba(8, 3, 15, 1);
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
