import styled from 'styled-components'

import { Introduction } from './Introduction'
import { Education } from './Education'
import { Projects } from './Projects'
import { Skills } from './Skills'

interface IProps {
  className?: string
}

function PortfolioLayout(props: IProps) {
  const { className } = props
  return (
    <PortfolioContainer className={className}>
      <PortfolioWrapper className="bg-white dark:bg-black">
        <Introduction/>
        <Education/>
        <Projects/>
        <Skills/>
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

const PortfolioContainer = styled.div`
  background: black;
  position: absolute;
  width: 50%;
`
const PortfolioWrapper = styled.div`
  display: block grid;
  justify-content: center;
`
export const Portfolio = styled(PortfolioLayout)``