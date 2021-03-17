import styled from 'styled-components'

interface IProps {
  className?: string
}

function SkillsLayout(props: IProps) {
  const { className } = props
  return (
    <SkillContainer className={className}>
      <SkillWrapper>
        <div>
          <h2>
            Skills
          </h2>
          <p>Python, Typescript, SQL, Fullstack, git, github, docker</p>
        </div>
      </SkillWrapper>
    </SkillContainer>
  )
}

const SkillContainer = styled.div`
`
const SkillWrapper = styled.div`
`
export const Skills = styled(SkillsLayout)``