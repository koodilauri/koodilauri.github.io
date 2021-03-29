import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { TechCard } from './TechCard'

interface IProps {
  className?: string
  project?: {
    image?: string
    title?: string
    text?: string
    tech?: any
    link?: string
  }
}

function ProjectCardEl(props: IProps) {
  const { className, project } = props
  return (
    <Container className="w-img-mobile md:w-img-desktop m-16 shadow bg-gray-900 bg-opacity-50">
      <div className="h-max ">
        <ProjectImage className="h-50 w-19 relative ">
          <div className="w-full h-full absolute top-0 left-0 rounded bg-purple-900 transform rotate-3 scale-105"></div>
          <div className="w-full h-full absolute top-0 left-0 rounded bg-purple-300 transform -rotate-3 scale-105 "></div>
          <Image
            src={project.image}
            alt="Project picture"
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className=""
          />
        </ProjectImage>
          <div className="font-bold text-lg text-center py-3">
            <Link href={project.link} passHref>
              {project.title}
            </Link>
          </div>
        <ProjectDetails className="text-center bg-gray-900 py-3" >
          <summary>Details</summary>
          <div className="mt-2 mx-2 text-base">{project.text}</div>
        </ProjectDetails>
          <div className="text-s font-thin flex flex-row flex-wrap justify-center">
            {project.tech.map(code => (
              <TechCard key={code.id} code={code} />
              ))}
          </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
width: 25rem;
`
const ProjectImage = styled.div`
  height: 15rem;
`
const ProjectDetails = styled.details`
`

export const ProjectCard = styled(ProjectCardEl)``
