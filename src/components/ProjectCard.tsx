import styled from 'styled-components'
import Link from 'next/link'
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
        <ProjectImageWrap className="group h-50 w-19 relative">
          <div className="z-0 w-full h-full absolute top-0 left-0 rounded bg-purple-900 transform rotate-3 scale-105 "></div>
          <div className="z-0 w-full h-full absolute top-0 left-0 rounded bg-purple-300 transform -rotate-3 scale-105 "></div>
          <div className="z-10 w-full h-full absolute top-0 left-0 rounded">
            <ProjectImage
              src={project.image}
              alt="Project picture"
              className=""
            />
          </div>
        </ProjectImageWrap>
        <div className="group h-16 mt-1 hover:h-auto">
          <h3 className=" font-bold text-3xl text-center py-3 bg-gray-900 hover:bg-gray-800 flex flex-row justify-center">
            <Link href={project.link} passHref>
              <a className="flex flex-row justify-center">
                {project.title}
                <img
                  src="/link.svg"
                  alt="l"
                  width={25}
                  height={20}
                  className="ml-2 mt-0.5 group-hover:animate-pulse"
                />
              </a>
            </Link>
            {/* <img
              src="/right-arrow.svg"
              alt="a"
              width={25}
              height={20}
              className="transform ml-2 mt-0.5 group-hover:rotate-90 transition-all duration-300 ease-in-out"
            /> */}
          </h3>
          <ProjectDetails className="text-center bg-gray-900 hover:bg-gray-800 py-3 transform group-hover:h-auto group-hover:scale-100 h-0 scale-0 transition-all duration-300 ease-in-out">
            <div className="m-2 text-base">{project.text}</div>
          </ProjectDetails>
        </div>
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
const ProjectImageWrap = styled.div`
  height: 15rem;
`
const ProjectImage = styled.img`
  width: 500px;
  height: 300px;
  object-fit: fill;
`
const ProjectDetails = styled.div``

export const ProjectCard = styled(ProjectCardEl)``
