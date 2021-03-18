import styled from 'styled-components'

interface IProps {
  className?: string
}

function IntroLayout(props: IProps) {
  const { className } = props
  return (
    <IntroContainer className={className}>
      <IntroWrapper>
        <div>
          Hello, I’m Lauri Koivisto; a master’s student of CCIS from Aalto University with a bachelor’s degree in Automation and Systems Technology.
        </div>
      </IntroWrapper>
    </IntroContainer>
  )
}

const IntroContainer = styled.div`
`
const IntroWrapper = styled.div`
`
export const Introduction = styled(IntroLayout)``