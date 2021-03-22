import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { ProjectCard } from './ProjectCard'

interface IProps {
  className?: string
}

function ProjectsEl(props: IProps) {
  const { className } = props
  return (
    <Container className={className}>
      <h2>Projects</h2>
      <p>
        <Link
          href="https://github.com/koodilauri/speaker-verification"
          passHref
        >
          <b>Thesis project</b>
        </Link>
      </p>
      <CardWrapper>
        <ProjectCard
          title="Thesis project"
          image="/proposed-CNN-system.jpg"
          text="Convolutional Neural Network (CNN) model for speaker recognition. Models were trained with Triton, Aalto University's high-performance computing cluster."
          pretitle="keras, praat, python"
          link="https://github.com/koodilauri/speaker-verification"
        />
        <ProjectCard
          title="Vaisala project"
          image="/vaisala-project.png"
          text="Summer project for vaisala"
          pretitle="docker, node.js, react, typescript"
          link="http://go.vaisala.com/keravaradar/"
        />
        <ProjectCard
          title="Monster Hunter Generations fansite"
          image="/hunters-log.png"
          text="Fansite for submitting speedruns for a videogame"
          pretitle="node.js, react, javascript"
          link="https://d386g19k2b21z4.cloudfront.net/"
        />
      </CardWrapper>
    </Container>
  )
}

const Container = styled.div``
const CardWrapper = styled.div``
export const Projects = styled(ProjectsEl)``
