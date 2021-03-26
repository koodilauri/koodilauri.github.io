import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

interface IProps {
  className?: string
  education ?: {
    image?: string
    date?: string
    text?: string
    degree?: string
  }
}

function EducationCardEl(props: IProps) {
  const { className, education } = props
  return (
    <Container className="w-full mb-8 flex md:flex-row rounded bg-purple-900 shadow">
      <img
        src={education.image}
        alt="School picture"
        width={200}
        height={200}
        className="rounded"
      />
      <div className="mt-2 ml-5">
        <div>
          <div className="text-xs uppercase font-bold">
            {education.degree}
          </div>
          <div className="font-bold leading-snug">
            {education.date}
          </div>
          <div className="mt-2 text-sm">{education.text}</div>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
  min-height: 200px;
`
export const EducationCard = EducationCardEl
