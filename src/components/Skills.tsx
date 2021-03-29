import styled from 'styled-components'

interface IProps {
  className?: string
}

function SkillsEl(props: IProps) {
  const { className } = props
  return (
    <Container className="w-full h-max m-auto p-4 bg-gradient-to-t from-black">
      <div >
        <div className="w-40 h-8 mx-auto bg-red-900 relative top-16 z-0"></div>
        <h2 className="text-center mb-4 text-6xl relative z-1">Skills</h2>
      </div>
      <div className="text-base text-center">
        <p>Python, Typescript, SQL, Fullstack, git, github, docker</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
background-color: rgba(8, 3, 15, 1);
`

export const Skills = styled(SkillsEl)``
