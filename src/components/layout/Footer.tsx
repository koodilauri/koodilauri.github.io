import Link from 'next/link'

import styled from 'styled-components'

interface IProps {
  className?: string
}

function FooterLayout(props: IProps) {
  const { className } = props
  return (
    <Container className="text-center font-light text-xl sm:text-3xl py-10 pin-b sm:w-96 mx-auto mt-96 border-t">
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
  border-color: #292929;
`

export const Footer = FooterLayout
