import Link from 'next/link'

import styled from 'styled-components'

interface IProps {
  className?: string
}

function FooterLayout(props: IProps) {
  const { className } = props
  return (
    <Container className="w-full text-center font-light text-3xl p-10 pin-b mt-96 bg-opacity-50">
      Made by Lauri Koivisto
      {/* <Link href="/" passHref>
        <StyledLink>
          <b className="btn-purple">Back to top</b>
        </StyledLink>
      </Link> */}
    </Container>
  )
}

const Container = styled.footer`
  font-family: 'Raleway-Thin', sans-serif;
  background-color: #292929;
`

export const Footer = FooterLayout
