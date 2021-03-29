import Link from 'next/link'

import styled from 'styled-components'

interface IProps {
  className?: string
}

function FooterLayout(props: IProps) {
  const { className } = props
  return (
    <div className="w-full text-center border-t border-grey p-4 pin-b">
      <Link href="/" passHref>
        <StyledLink>
          <b className="btn-purple">Back to top</b>
        </StyledLink>
      </Link>
    </div>
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
`
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 40px;
  position: relative;
`
const StyledLink = styled.a``

export const Footer = FooterLayout
