import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

interface IProps {
  className?: string
  image ?: string
  title ?: string
  text ?: string
  pretitle ?: string
  link ?: string
}

function ProjectCardLayout(props: IProps) {
  const { className, image, title, text, pretitle, link } = props
  return (
    <div className={className}>
      <div>
      <Image
            src={image}
            alt="Project picture"
            width={360}
            height={250}
            className="rounded"
          />
        <div className="mt-2">
          <div>
            <div className="text-xs text-gray-600 uppercase font-bold">{ pretitle }</div>
            <div className="font-bold text-gray-700 leading-snug">
              <Link href={ link } passHref>
                { title }
              </Link>
            </div>
            <div className="mt-2 text-sm text-gray-600">{ text }</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ProjectCard = styled(ProjectCardLayout)``