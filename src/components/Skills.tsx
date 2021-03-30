import styled from 'styled-components'
import Image from 'next/image'

interface IProps {
  className?: string
}

function SkillsEl(props: IProps) {
  const { className } = props
  return (
    <Container className="w-full m-auto p-4 bg-gradient-to-t from-black ">
      <div>
        {/* <div className="w-44 h-8 mx-auto bg-red-900 relative top-20 z-0"></div> */}
        <h2 className="text-center mb-8 text-6xl relative z-1">Skills</h2>
      </div>
      <div className="text-base text-center items-center flex flex-col">
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
        <a href="https://1drv.ms/b/s!AuBiEbJ3Ox0fiDLrwfCavsHRdJiA?e=2muTy9">
          <div className=" w-40 py-2 px-5 bg-purple-900 font-semibold rounded-lg shadow-md hover:bg-purple-700 transition delay-150 duration-300 ease-in-out transform scale-100 hover:scale-105">
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
  }
  margin-bottom: 2rem;
`

export const Skills = styled(SkillsEl)``
