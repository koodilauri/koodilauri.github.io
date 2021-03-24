import styled from 'styled-components'
import { EducationCard } from './EducationCard'

interface IProps {
  className?: string
}

function EducationEl(props: IProps) {
  const { className } = props
  return (
    <Container className="w-full md:w-11/12 lg:w-9/12 xl:w-7/12 h-max m-auto p-4">
      <h2 className="text-center">Education</h2>
      <CardWrapper className="w-full h-max p-4">
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
          image="/hyvinkaa-logo.jpg"
          text="I wrote extended mathematics, physics, english, social studies and finnish."
          date="August 2010 - June 2013"
        />
      </CardWrapper>
    </Container>
  )
}
const Container = styled.div`
  & > h2 {
    font-size: 2rem;
    color: #999;
    font-weight: 500;
    margin: 0 0 20px 0;
    letter-spacing: 2px;
    // text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
  }
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
