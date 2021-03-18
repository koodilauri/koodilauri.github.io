import Link from 'next/link'

import styled from 'styled-components'

interface IProps {
  className?: string
}

function FooterLayout(props: IProps) {
  const { className } = props
  return (
    <FooterContainer className={className}>
      <NavWrapper>
        <Nav>
          <Link href="/" passHref>
            <StyledLink>
              <b>Powered by{' '}
                <img src="/vercel.svg" alt="Vercel Logo"/></b>
            </StyledLink>
          </Link>
        </Nav>
      </NavWrapper>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background: white;
  position: absolute;
  width: 100%;
`
const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 40px;
  position: relative;
`
const StyledLink = styled.a``

export const Footer = styled(FooterLayout)``