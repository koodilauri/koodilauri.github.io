import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

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
    <Container className="w-img-mobile md:w-img-desktop m-4 md:m-16 shadow bg-gray-900 bg-opacity-50">
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
        <ProjectText className="">
          <div className="font-bold text-lg text-center pt-3 pb-3 bg-purple-700">
            <Link href={project.link} passHref>
              {project.title}
            </Link>
          </div>
          <div className="mt-2 text-sm ">{project.text}</div>
          <div className="text-s font-bold flex flex-col md:flex-row flex-wrap">
            {project.tech.map((p, i) => (
              <TechCard
                className="w-max m-2 px-2 py-1 text-xl rounded shadow bg-primary"
                key={i}
              >
                <Image
                  src={p.icon}
                  alt="Project picture"
                  width={20}
                  height={20}
                  className=""
                />
                {p.name}
              </TechCard>
            ))}
          </div>
        </ProjectText>
      </div>
    </Container>
  )
}
const Container = styled.div`
`
const ProjectImage = styled.div`
  height: 10rem;
`
const TechCard = styled.div``
const ProjectText = styled.div`
  width: 20rem;
  height: 12rem;
`

export const ProjectCard = styled(ProjectCardEl)``
