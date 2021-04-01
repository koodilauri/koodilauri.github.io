import styled from 'styled-components'

import { Layout } from '../components/layout/Layout'
import { Introduction } from '../components/Introduction'
import { Education } from '../components/Education'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'

export default function Home() {
  return (
    <Layout>
      <Header className="flex flex-col items-center mb-80 space-y-8">
        <h1 className="mt-img-mobile text-5xl mt-20 md:mt-52 sm:text-6xl lg:text-8xl">
          Lauri Koivisto
        </h1>
        <div className="flex flex-row justify-evenly space-x-10">
          <a href="https://github.com/koodilauri">
            <img
              src="/GitHub-Mark-Light-64px.png"
              alt="github"
              width="64"
              height="64"
              className="transform scale-100 scale-110 hover:scale-125 rounded-full transition duration-300 ease-in-out border-4 border-black hover:border-purple-900"
            />
          </a>
          <a href="mailto:lakoivisto@gmail.com">
            <img
              src="/email.png"
              alt="email"
              width="64"
              height="64"
              className="transform scale-100 scale-110 hover:scale-125 rounded-full transition duration-300 ease-in-out border-4 border-black hover:border-purple-900"
            />
          </a>
        </div>
        <Introduction />
      </Header>
      <Container className="flex flex-col items-center">
        <Education />
        <Projects />
        <Skills />
      </Container>
    </Layout>
  )
}

const Header = styled.header`
  // align-items: center;
  // display: flex;
  // flex-direction: column;
  // margin-bottom: 3rem;
  & > h1 {
    font-weight: 600;
  }
`
const Container = styled.div``
