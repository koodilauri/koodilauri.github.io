import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

interface IProps {
  className?: string
  image ?: string
  date ?: string
  text ?: string
  degree ?: string
}

function EducationCardLayout(props: IProps) {
  const { className, image, date, text, degree } = props
  return (
    <div className={className}>
      <div>
        <Image
          src={image}
          alt="School picture"
          width={360}
          height={130}
          className="rounded"
        />
        <div className="mt-2">
          <div>
            <div className="text-xs text-gray-600 uppercase font-bold">{ degree }</div>
            <div className="font-bold text-gray-700 leading-snug">
              { date }
            </div>
            <div className="mt-2 text-sm text-gray-600">{ text }</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const EducationCard = EducationCardLayout