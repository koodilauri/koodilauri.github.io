import styled from 'styled-components'

interface IProps {
  className?: string
}

function SkillsEl(props: IProps) {
  const { className } = props
  return (
    <Container className="w-full md:w-11/12 lg:w-9/12 xl:w-7/12 h-max m-auto p-4">
            <div>
        <div className="w-40 h-8 mx-auto bg-purple-900 relative top-16 z-0"></div>
        <h2 className="text-center mb-4 text-6xl relative z-1">Skills</h2>
      </div>
      <div className="text-base">
        <p>Python, Typescript, SQL, Fullstack, git, github, docker</p>
      </div>
    </Container>
  )
}

const Container = styled.div``

export const Skills = styled(SkillsEl)``
