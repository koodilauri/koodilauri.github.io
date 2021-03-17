import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

interface IProps {
  className?: string
}

function ProjectsLayout(props: IProps) {
  const { className } = props
  return (
    <ProjectContainer className={className}>
      <ProjectWrapper>
      <div>
        <h2>
          Projects
        </h2>
        <p>
          <Link href="https://github.com/koodilauri/speaker-verification" passHref>
              <b>Thesis project</b>
          </Link>
        </p>
        <p>
          <Link href="http://go.vaisala.com/keravaradar/" passHref>
              <b>Work project at Vaisala</b>
          </Link>
          <Image
            src="/vaisala-project.png"
            alt="Vaisala project"
            width={460}
            height={350}
          />
        </p>
        <p>
          <Link href="https://d386g19k2b21z4.cloudfront.net/" passHref>
              <b>Fansite for submitting speedruns for a videogame</b>
          </Link>
        </p>
      </div>
      </ProjectWrapper>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
`
const ProjectWrapper = styled.div`
`
export const Projects = styled(ProjectsLayout)``