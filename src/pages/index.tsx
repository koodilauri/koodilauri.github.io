import styled from 'styled-components'
import Link from 'next/link'

import { Layout } from '../components/layout/Layout'
import { Introduction } from '../components/Introduction'
import { Education } from '../components/Education'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export default function Home() {
  return (
    <Layout>
      <Header className="h-screen">
        <h1 className="mt-img-mobile text-5xl md:mt-40 md:text-8xl">
          Lauri Koivisto
        </h1>
        <div className="mt-8 flex flex-col md:flex-row justify-evenly">
          <a href="https://github.com/koodilauri">
            <img
              src="/GitHub-Mark-Light-64px.png"
              alt="github"
              width="64"
              height="64"
              className="m-5"
            />
          </a>
          <a href="mailto:lakoivisto@gmail.com">
            <img
              src="/email.png"
              alt="mailto"
              width="64"
              height="64"
              className="m-5"
            />
          </a>
        </div>
        <Introduction />
      </Header>
      <Container>
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
    padding-top: 3rem;
  }
`
