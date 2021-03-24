import styled from 'styled-components'

import { Layout } from '../components/layout/Layout'
import { Introduction } from '../components/Introduction'
import { Education } from '../components/Education'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export default function Home() {
  return (
    <Layout>
      <Header>
        <h1>Lauri Koivisto</h1>
        <em>Hi!</em>
      </Header>
      <Container>
        <Introduction />
        <Education />
        <Projects />
        <Skills />
      </Container>
    </Layout>
  )
}

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  & > h1 {
    font-size: 4rem;
    font-weight: 600;
  }
`
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  // max-width: 700px;
  // margin: 0 auto;
  & > * + * {
    margin-top: 3rem;
  }
`
