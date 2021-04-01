import styled from 'styled-components'

interface IProps {
  className?: string
}

function SkillsEl(props: IProps) {
  const { className } = props
  return (
    <Container className="w-full m-auto bg-gradient-to-t from-black pt-40">
      <div className="mb-12">
        <div className="w-32 h-6 sm:w-44 sm:h-8 mx-auto bg-red-900 relative top-12 sm:top-16 z-0"></div>
        <h2 className="text-center text-5xl sm:text-6xl relative z-1">
          Skills
        </h2>
      </div>
      <div className="text-base text-center items-center flex flex-col space-y-6">
        <SKillBlock>
          <h3>Languages</h3>
          <div>C, Javascript, Matlab, Python, Typescript</div>
        </SKillBlock>
        <SKillBlock>
          <h3>Frontend</h3>
          <div>CSS, HTML, Next.js, React, Redux, Tailwind CSS</div>
        </SKillBlock>
        <SKillBlock>
          <h3>Backend</h3>
          <div>Node.js, PostgreSQL</div>
        </SKillBlock>
        <SKillBlock>
          <h3>DevOps</h3>
          <div>AWS, Docker, Git</div>
        </SKillBlock>
        <a href="https://1drv.ms/b/s!AuBiEbJ3Ox0fiDLrwfCavsHRdJiA?e=2muTy9" target="_blank" rel="noopener noreferrer">
          <div className=" w-40 py-2 px-5 bg-red-900 font-semibold rounded-lg shadow-md hover:bg-red-700 transition delay-150 duration-300 ease-in-out transform scale-100 hover:scale-105">
            Resume
          </div>
        </a>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: rgba(8, 3, 15, 1);
`
const SKillBlock = styled.div`
  & > h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    z-index: 10;
  }
`

export const Skills = styled(SkillsEl)``
