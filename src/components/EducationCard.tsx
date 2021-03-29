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
        width={200}
        height={200}
        className="rounded bg-green-900"
      />
      <div className="mt-2 ml-5 mr-5">
        <div>
          <div className="text-3xl uppercase font-bold">{education.degree}</div>
          <div className="font-bold leading-snug text-base">
            {education.date}
          </div>
          <div className="mt-2 text-lg">{education.text}</div>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
  min-height: 200px;
`
export const EducationCard = EducationCardEl
