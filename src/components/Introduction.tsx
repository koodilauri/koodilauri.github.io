import styled from 'styled-components'

interface IProps {
  className?: string
}

function IntroEl(props: IProps) {
  const { className } = props
  return (
    <Container className="w-full md:w-11/12 lg:w-9/12 xl:w-7/12 h-max mx-auto p-4">
      <div>
        Hello, I’m Lauri Koivisto; a master’s student of CCIS from Aalto
        University with a bachelor’s degree in Automation and Systems
        Technology.
      </div>
    </Container>
  )
}

const Container = styled.div`
`

export const Introduction = styled(IntroEl)``
