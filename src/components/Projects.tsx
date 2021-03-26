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
          name: 'Keras',
          icon: '/keras.png',
        },
        {
          name: 'Praat',
          icon: '/praat.png',
        },
        {
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
          name: 'Docker',
          icon: '/docker-logo.png',
        },
        {
          name: 'Node.js',
          icon: '/node.png',
        },
        {
          name: 'Typescript',
          icon: '/typescript.svg',
        },
      ],
      link: 'http://go.vaisala.com/keravaradar/',
    },
    monsterhunter: {
      title: 'Monster Hunter Generations fansite',
      image: '/hunters-log.png',
      text: 'Fansite for submitting speedruns for a videogame',
      tech: [
        {
          name: 'Javascript',
          icon: '/javascript.svg',
        },
        {
          name: 'Node.js',
          icon: '/node.png',
        },
        {
          name: 'React',
          icon: '/react.svg',
        },
      ],
      link: 'https://d386g19k2b21z4.cloudfront.net/',
    },
  }
  const { className } = props
  return (
    <Container className="w-full h-auto bg-purple-900 bg-opacity-10">
      <div>
        <div className="w-60 h-8 mx-auto bg-purple-900 relative top-16 z-0"></div>
        <h2 className="text-center mb-4 text-6xl relative z-1">Projects</h2>
      </div>
      <CardWrapper className="w-full mt-8 flex flex-col md:flex-row justify-evenly flex-wrap items-start">
        <ProjectCard project={projects.thesis} />
        <ProjectCard project={projects.vaisala} />
        <ProjectCard project={projects.monsterhunter} />
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
