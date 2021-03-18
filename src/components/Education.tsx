import styled from 'styled-components'

interface IProps {
  className?: string
}

function EducationLayout(props: IProps) {
  const { className } = props
  return (
    <EducationContainer className={className}>
      <EducationWrapper>
        <div>
          <h2>
            Education
          </h2>
          <p>
          Aalto university, Espoo, Otaniemi — Master of Science in Technology
          </p>
          <p>
          Aalto university, Espoo, Otaniemi — Bachelor of Science (Technology)
          </p>
          <p>
          Hyvinkää Senior High School, Hyvinkää — Graduate student
          </p>
        </div>
      </EducationWrapper>
    </EducationContainer>
  )
}

const EducationContainer = styled.div`
`
const EducationWrapper = styled.div`
`
export const Education = styled(EducationLayout)``