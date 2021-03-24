import styled from 'styled-components'

interface IProps {
  className?: string
}

function SkillsEl(props: IProps) {
  const { className } = props
  return (
    <Container className="w-full md:w-11/12 lg:w-9/12 xl:w-7/12 h-max m-auto p-4">
      <div>
        <h2>Skills</h2>
        <p>Python, Typescript, SQL, Fullstack, git, github, docker</p>
      </div>
    </Container>
  )
}

const Container = styled.div``

export const Skills = styled(SkillsEl)``
