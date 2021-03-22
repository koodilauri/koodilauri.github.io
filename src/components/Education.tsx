import styled from 'styled-components'
import { EducationCard } from './EducationCard'

interface IProps {
  className?: string
}

function EducationEl(props: IProps) {
  const { className } = props
  return (
    <Container className={className}>
      <h2>Education</h2>
      <CardWrapper>
        <EducationCard
          degree="Master of Science in Technology"
          image="/aalto-logo.jpg"
          text="I am studying Computer, Communication and Information Sciences in the field of Signal, Speech and Language Processing."
          date="October 2017 - Present"
        />
        <EducationCard
          degree="Bachelor of Science (Technology)"
          image="/aalto-logo.jpg"
          text="I finished my bachelor’s degree in Automation and System technology in 2017. I wrote my thesis about Symbol Grounding in Robotics."
          date="October 2014 - 2017"
        />
        <EducationCard
          degree="Graduate student"
          image="/hyk-logo.png"
          text="I wrote extended mathematics, physics, english, social studies and finnish."
          date="August 2010 - June 2013"
        />
      </CardWrapper>
    </Container>
  )
}
const Container = styled.div`
  & > h2 {
    font-size: 14px;
    font-weight: 500;
    margin: 0 0 20px 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
  }
`
const CardWrapper = styled.div`
  align-items: center;
  align-content: space-around;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const Education = EducationEl
