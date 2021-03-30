import styled from 'styled-components'
import Link from 'next/link'
import { ProjectCard } from './ProjectCard'

interface IProps {
  className?: string
}

function ProjectsEl(props: IProps) {
  const projects = {
    thesis: {
      title: 'Thesis project',
      image: '/proposed-CNN-system.jpg',
      text:
        "Convolutional Neural Network (CNN) model for speaker recognition. Models were trained with Triton, Aalto University's high-performance computing cluster.",
      tech: [
        {
          id: 1,
          name: 'Keras',
          icon: '/keras.png',
        },
        {
          id: 2,
          name: 'Praat',
          icon: '/praat.png',
        },
        {
          id: 3,
          name: 'Python',
          icon: '/python.png',
        },
      ],
      link: 'https://github.com/koodilauri/speaker-verification',
    },
    vaisala: {
      title: 'Vaisala project',
      image: '/vaisala-project.png',
      text: 'Summer project for vaisala',
      tech: [
        {
          id: 1,
          name: 'Docker',
          icon: '/docker-logo.png',
        },
        {
          id: 2,
          name: 'Node.js',
          icon: '/node.svg',
        },
        {
          id: 3,
          name: 'Typescript',
          icon: '/typescript.svg',
        },
      ],
      link: 'http://go.vaisala.com/keravaradar/',
    },
    monsterhunter: {
      title: 'Monster Hunter fansite',
      image: '/hunters-log.png',
      text: 'Fansite for submitting speedruns for a videogame',
      tech: [
        {
          id: 1,
          name: 'Javascript',
          icon: '/javascript.svg',
        },
        {
          id: 2,
          name: 'Node.js',
          icon: '/node.svg',
        },
        {
          id: 3,
          name: 'React',
          icon: '/react.svg',
        },
      ],
      link: 'https://d386g19k2b21z4.cloudfront.net/',
    },
    portfolio: {
      title: 'Personal portfolio',
      image: '/portfolio.png',
      text:
        'I developed and designed a website using Next.js and tailwindCSS to showcase my portfolio in a more visually appealing format.',
      tech: [
        {
          id: 1,
          name: 'Typescript',
          icon: '/typescript.svg',
        },
        {
          id: 2,
          name: 'Next.js',
          icon: '/next-js.svg',
        },
        {
          id: 3,
          name: 'Tailwind',
          icon: '/tailwind-css.svg',
        },
      ],
      link: 'https://github.com/koodilauri/koodilauri.github.io',
    },
  }
  const { className } = props
  return (
    <Container className="w-full h-auto min-h-screen bg-purple-900 bg-opacity-10">
      <div>
        {/* <div className="w-64 h-8 mx-auto bg-purple-900 relative top-20 z-0"></div> */}
        <h2 className="text-center mb-4 text-6xl relative z-1">Projects</h2>
      </div>
      <CardWrapper className="w-full mt-8 flex flex-col md:flex-row justify-evenly flex-wrap items-start">
        <ProjectCard project={projects.thesis} />
        <ProjectCard project={projects.vaisala} />
        <ProjectCard project={projects.monsterhunter} />
        <ProjectCard project={projects.portfolio} />
      </CardWrapper>
    </Container>
  )
}

const Container = styled.div`
  & > h2 {
    font-size: 3.75rem;
    font-weight: 500;
    margin: 0 0 20px 0;
    letter-spacing: 2px;
  }
`
const CardWrapper = styled.div``
export const Projects = styled(ProjectsEl)``
