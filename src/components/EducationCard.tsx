import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

interface IProps {
  className?: string
  education?: {
    image?: string
    date?: string
    text?: string
    degree?: string
  }
}

function EducationCardEl(props: IProps) {
  const { className, education } = props
  return (
    <Container className="w-full mb-12 flex md:flex-row rounded bg-gray-900 hover:bg-opacity-80 bg-opacity-60 shadow">
      <img
        src={education.image}
        alt="School picture"
        width={198}
        height={198}
        className="rounded bg-green-900 max-h-44 h-0 w-0 lg:h-60 lg:w-44 self-center"
      />
      <div className="mt-2 mx-5">
        <div>
          <h3 className="text-3xl uppercase font-bold">{education.degree}</h3>
          <div className="font-bold leading-snug text-base">
            {education.date}
          </div>
          <div className="my-2 text-lg">{education.text}</div>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
  min-height: 200px;
`
export const EducationCard = EducationCardEl
