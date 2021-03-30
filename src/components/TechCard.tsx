import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

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
      className="m-2 px-2 py-1 text-xl rounded shadow bg-primary hover:bg-purple-700 flex flex-row transition delay-150 duration-150 ease-in-out transform hover:scale-105"
      key={code.id}
    >
      <div className="mt-1 mr-0.5 w-5 h-5">
        <Image
          src={code.icon}
          alt="Project picture"
          width={20}
          height={20}
          layout="responsive" // required
          objectFit="contain" // change to suit your needs
        />
      </div>
      <div className="mb-0">{code.name}</div>
    </Container>
  )
}
const Container = styled.div``

export const TechCard = styled(TechCardEl)``
