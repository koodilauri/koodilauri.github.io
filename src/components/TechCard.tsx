import styled from 'styled-components'

interface IProps {
  className?: string
  code?: {
    id?: any
    icon?: string
    name?: string
  }
}

function TechCardEl(props: IProps) {
  const { code } = props
  return (
    <Container
      className="items-center justify-center sm:mx-0 mx-2 px-2 py-1 text-xl rounded bg-purple-900 hover:bg-purple-700 flex flex-row  transition delay-150 duration-150 ease-in-out transform hover:scale-105"
      key={code.id}
    >
      <div className="mr-0.5 w-5 h-5 flex items-stretch">
        <img
          src={code.icon}
          alt="Project picture"
          width={25}
          height={25}
          className="self-center"
        />
      </div>
      <div className="text-center">{code.name}</div>
    </Container>
  )
}
const Container = styled.div``

export const TechCard = styled(TechCardEl)``
