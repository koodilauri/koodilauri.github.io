import styled from 'styled-components'

interface IProps {
  className?: string
}

function IntroEl(props: IProps) {
  const { className } = props
  return (
    <Container className={className}>
      <div>
        Hello, I’m Lauri Koivisto; a master’s student of CCIS from Aalto
        University with a bachelor’s degree in Automation and Systems
        Technology.
      </div>
    </Container>
  )
}

const Container = styled.div``

export const Introduction = styled(IntroEl)``
