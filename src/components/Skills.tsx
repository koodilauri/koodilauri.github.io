import styled from 'styled-components'

interface IProps {
  className?: string
}

function SkillsEl(props: IProps) {
  const { className } = props
  return (
    <Container className={className}>
      <div>
        <h2>Skills</h2>
        <p>Python, Typescript, SQL, Fullstack, git, github, docker</p>
      </div>
    </Container>
  )
}

const Container = styled.div``

export const Skills = styled(SkillsEl)``
