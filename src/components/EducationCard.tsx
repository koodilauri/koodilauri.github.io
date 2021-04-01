import styled from 'styled-components'

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
    <Container className="w-full flex md:flex-row rounded bg-gray-900 transform scale-100 hover:scale-105 hover:bg-opacity-80 bg-opacity-60 shadow transition delay-150 duration-500 ease-in-out">
      <img
        src={education.image}
        alt="School picture"
        width={198}
        height={198}
        className="rounded bg-green-900 max-h-44 transform w-0 scale-0 lg:scale-100 lg:h-60 lg:w-44 self-center transition delay-150 duration-500 ease-in-out"
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
