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
          name: 'keras',
          icon: '/keras.png',
        },
        {
          name: 'praat',
          icon: '/praat.png',
        },
        {
          name: 'python',
          icon: '/python.jpg',
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
          name: 'docker',
          icon: '/praat.png',
        },
        {
          name: 'node.js',
          icon: '/praat.png',
        },
        {
          name: 'typescript',
          icon: '/praat.png',
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
          name: 'javascript',
          icon: '/praat.png',
        },
        {
          name: 'node.js',
          icon: '/praat.png',
        },
        {
          name: 'react',
          icon: '/praat.png',
        },
      ],
      link: 'https://d386g19k2b21z4.cloudfront.net/',
    },
  }
  const { className } = props
  return (
    <Container className="w-full mt-8 flex flex-col md:flex-row justify-evenly items-center flex-wrap">
      <h2 className="dark:text-gray-700">Projects</h2>
      <CardWrapper className="w-full mt-8 flex flex-col md:flex-row justify-evenly items-center flex-wrap">
        <ProjectCard project={projects.thesis} />
        <ProjectCard project={projects.vaisala} />
        <ProjectCard project={projects.monsterhunter} />
      </CardWrapper>
    </Container>
  )
}

const Container = styled.div`
  & > h2 {
    font-size: 2rem;
    font-weight: 500;
    margin: 0 0 20px 0;
    letter-spacing: 2px;
  }
`
const CardWrapper = styled.div`
  background: #101;
`
export const Projects = styled(ProjectsEl)``
